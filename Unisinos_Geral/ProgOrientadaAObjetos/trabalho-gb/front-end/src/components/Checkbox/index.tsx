/**
 * Obtido e adaptado de https://uiverse.io/SelfMadeSystem/green-bobcat-29
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2023.06.14 - Bom Princípio - RS
 */
import { useState } from "react";
import './style.scss';

const Checkbox = ({className, onChange, checked, text, startState, action}: {className?: string, onChange?: React.ChangeEventHandler<HTMLInputElement>, checked?: boolean, text?: string, startState?:boolean, action?: () => Promise<boolean>}) => {
    
    const [stat, setStat] = useState<boolean>(checked === undefined ? (startState===undefined ? false : startState) : checked);

    const runAction = async () => {
        let statbkp = stat;

        setStat(!statbkp)
        
    }
    
    return(
        <label className={`checkbox-comp-container ${className}`}>
            
            <input type="checkbox" checked={checked===undefined ? stat : checked} onChange={ async e => {
                
                setStat(!stat)

                if(action !== undefined) {
                    if( ! await action() ) setStat( stat )
                }
                
                if(onChange!==undefined) onChange(e)
                
            }}  />
            <svg viewBox="-10 -10 84 84" height="20px" width="20px">
                <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
            </svg>
            {
                text && text!='' &&
                <span className="title-space">{text}</span>
            }
        </label>
    );
}
export default Checkbox;