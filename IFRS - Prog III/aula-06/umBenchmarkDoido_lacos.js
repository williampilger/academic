// Executar com node pra facilitar a vida!

const REPS = 10000000000
let startTs = 0;

// startTs = Date.now();
// for(let i=0;i<REPS;i++){
//     const teste = i + 456 - 9871 - i;
// }
// console.log(`For com CONST executou as ${REPS} repeticoes em ${ Date.now() - startTs}ms`);

// startTs = Date.now();
// for(let i=0;i<REPS;i++){
//     let teste = i + 456 - 9871 - i;
// }
// console.log(`For com LET executou as ${REPS} repeticoes em ${ Date.now() - startTs}ms`);


startTs = Date.now();
for(let i=0;i<REPS;i++){
    let a = 'William';
    let b = 'Pilger';
    let teste = `${a} ${b}`;
}
console.log(`For com INTERPOLAÇÃO executou as ${REPS} repeticoes em ${ Date.now() - startTs}ms`);
startTs = Date.now();
for(let i=0;i<REPS;i++){
    let a = 'William';
    let b = 'Pilger';
    let teste = a + ' ' + b;
}
console.log(`For com CONCATENAÇÃO executou as ${REPS} repeticoes em ${ Date.now() - startTs}ms`);