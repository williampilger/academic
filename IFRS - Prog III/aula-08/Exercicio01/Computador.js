class Computador {

    constructor(marca, modelo, processador, memoriaRAM, armazenamento) {
        this.marca = marca;
        this.modelo = modelo;
        this.processador = processador;
        this.memoriaRAM = memoriaRAM;
        this.armazenamento = armazenamento;
    }

    printInfo(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Processador: ${this.processador}`);
        console.log(`Memória RAM: ${this.memoriaRAM} GB`);
        console.log(`Armazenamento: ${this.armazenamento} GB`);
    }
}

module.exports = Computador;