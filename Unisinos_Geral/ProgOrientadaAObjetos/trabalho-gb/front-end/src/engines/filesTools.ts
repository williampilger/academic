/**
 * Authenty AE - Bom Princípio-RS  |  github.com/authentyAE
 * by: will.i.am                   |  github.com/williampilger
 *
 * 2022 - Bom Princípio - RS
 */
export async function inputFileReader(event:any){
    return new Promise((res,rej)=>{
        let input = event.target;
        let reader = new FileReader();
        reader.onload = function(){
        res(reader.result)
        };
        reader.readAsText(input.files[0]);
    });
}