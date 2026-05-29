//roda no node, to com preguiça de criar o html

class Pet {
    constructor(nome, especie){
        this.nome = nome
        this.especie = especie
    }
}

class Pessoa {

    // Essas declarações são inúteis, uma vez que o construtor vai criar isso sozinho...
    // nome;
    // sobrenome;
    // idade;

    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.pets = []
    }

    addPet(p){
        this.pets.push(p)
    }

    imprimir(){
        console.log(this)
    }
}

let p1 = new Pessoa("Lucas", "Silva", 95);
console.log(p1)

p1.addPet( new Pet("Bartolomeu","Lagarto") )

p1.imprimir()
