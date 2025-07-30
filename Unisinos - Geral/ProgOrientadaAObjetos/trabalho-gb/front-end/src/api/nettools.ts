import Confg from '../../package.json';
import CONSTS from '../config/constants.json';

export function setCookie(cName: string, cValue: string, expDays: number): void {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    document.cookie = `${cName}=${cValue}; expires=${date.toUTCString()}; path=/; domain=${Confg.mainDomain}`;
}

export function getCookie(cName: string): string {
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    const name = cName + "=";
    let res = '';
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

export function blobToBase64(blob: any) {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}

export function selectDifferentValues(newArray: any, oldArray: any) {
    if(Array.isArray(newArray)){
        if( JSON.stringify(newArray) == JSON.stringify(oldArray) ) return null;
        return newArray;
    }
    if(oldArray)
    {
        let differentValues: any = {};
        if(newArray) {
            Object.keys(newArray).forEach((key) => {
                if (typeof newArray[key] == 'object' && typeof oldArray[key] == 'object') {
                    let r = selectDifferentValues(newArray[key], oldArray[key]);
                    if ( r && (Array.isArray(r) || Object.keys(r).length > 0) ) {
                        differentValues[key] = r;
                    }
                } else if (newArray[key] != oldArray[key]) {
                    differentValues[key] = newArray[key];
                }
            });
        }
        return differentValues;
    }
    return newArray;
}

export const characterLimitCounter = (databaseSize: number) => {
    const languagesCount = CONSTS.arrayIdiomas.length;
    let soma = 2 + languagesCount * 6;
    let itemSize = Math.round((databaseSize - soma) / languagesCount);
    return itemSize - 1;
}