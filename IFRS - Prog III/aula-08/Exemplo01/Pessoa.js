class Pessoa {

    constructor(nome ) {
        this.nome = nome;
        this.pets = [];
    }

    adicionarPet(pet) {
        this.pets.push(pet);
    }
}