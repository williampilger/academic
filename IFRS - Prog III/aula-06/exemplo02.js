// rodar com node pra facilitar

let pessoa = {
    nome: 'Maria',
    idade: 20,
    endereco: {
        rua: 'Rua Vol. da Pátria',
        numero: 12345,
        bairro: 'Vila Rica',
        cep: '95765-000',
        cidade: 'Feliz',
        uf: 'RS'
    }
}

let {nome, ideide, endereco:{rua, numero, bairro, cidade}} = pessoa;

console.log(nome, rua)