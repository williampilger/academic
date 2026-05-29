
const Pet = require("./Pet");
const Pessoa = require("./Pessoa");

const p1 = new Pet("Rex", "Cachorro");
const p2 = new Pet("Mimi", "Gato");

const pessoa = new Pessoa("João");
pessoa.adicionarPet(p1);
pessoa.adicionarPet(p2);

console.log(pessoa);