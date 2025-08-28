package Exercice1;

public class Main {

    public static void main(String[] args) {

        // Criando e configurando um Aluno
        Aluno aluno = new Aluno();
        aluno.nome = "João Silva";
        aluno.idade = 20;
        aluno.curso = "Análise e Desenvolvimento de Sistemas";
        aluno.print();
        System.out.println();

        // Criando e configurando um Chimarrão
        Chimarrao chimarrao = new Chimarrao();
        chimarrao.tipo = "Erva-mate tradicional";
        chimarrao.temperatura = 70.5;
        chimarrao.capacidade = 1000;
        chimarrao.print();
        System.out.println();

        // Criando e configurando uma Cidade
        Cidade cidade = new Cidade();
        cidade.nome = "Porto Alegre";
        cidade.populacao = 1500000;
        cidade.estado = "Rio Grande do Sul";
        cidade.print();
        System.out.println();

        // Criando e configurando um Computador
        Computador computador = new Computador();
        computador.marca = "Dell";
        computador.modelo = "Inspiron 15";
        computador.ano = 2023;
        computador.print();
        System.out.println();

        // Criando e configurando um Pet
        Pet pet = new Pet();
        pet.nome = "Rex";
        pet.raca = "Labrador";
        pet.idade = 3;
        pet.print();
    }
}
