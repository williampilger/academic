//objeto literal
let pessoa1 = {
    nome: "Pilger Will",
    idade: 15,

    imprimir: function () {
        console.log(`${this.nome}, tem ${this.idade} anos de idade`)
    }
}
pessoa1.cidade = 'Harmonia';

console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1['nome'])
console.log(pessoa1.cidade)
console.log(`Isso aqui é uma interpolação de strings, e ${pessoa1.nome} mora em ${pessoa1.cidade}!`)

delete pessoa1.cidade;
console.log(`A pessoa1 mora em ${pessoa1.cidade}`)//isso deve imprimir undefined

let teste = 'um nome qualquer'
let pessoa2 = {
    ['uma propriedade com espaçoc']: 'Valor da propriedade',
    [teste]: 'O nome dessa variável é "um nome qualquer"'
}

let umArrayDiferente = {
    0: "zero",
    1: "um",
    1.5: 'um e meio', // pois então... isso funciona!
    2: 'dois'
}
console.log(`o arrei pode ter uma posição quebrada, como essa: ${umArrayDiferente[1.5]}`)