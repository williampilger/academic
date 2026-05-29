// Função "Normal"
function somar(a,b){
    return a+b;
}
let x = somar(10,20)
console.log("A soma é ", x)


// Função Anônima
let mult = new Function("a","b","return a+b")
let y = mult(10,2)
console.log("A multiplicação é ", y)


// Função em uma variável
let sub = function(a,b){
    return a - b
}
let z = sub(10,5)
console.log("A subtração é ", z)


// Arrow Function
const func = (a,b) => a/b
let a = func(15,2)
console.log("A divisão é ", a)


// Teste da Function
let X = {teste:"Antes da Declaração"}
function testePrint(){
    console.log("Estou printando dentro da Function: ", X)
}
const arrowTestePrint = () => {
    console.log("Estou printando dentro da Arrow: ", X)
}
X = {teste:"Valor depois"}
testePrint()
arrowTestePrint()