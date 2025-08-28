package Exercice2;

public class Main {

    public static void main(String[] args) {

        Animal a1 = new Animal();
        a1.nome = "Totó";
        a1.especie = "Cachorro";
        a1.idade = 5;
        a1.print();

        System.out.println();

        Filme f1 = new Filme();
        f1.titulo = "Inception";
        f1.diretor = "Christopher Nolan";
        f1.duracao = 148;
        f1.print();

        System.out.println();

        Canal c1 = new Canal();
        c1.titulo = "TechWorld";
        c1.proprietario = "Alice";
        c1.inscritos = 120000;
        c1.print();

        System.out.println();

        Smartphone s1 = new Smartphone();
        s1.fabricante = "Apple";
        s1.modelo = 13.5;
        s1.armazenamento = 256;
        s1.print();

        System.out.println();

        Curso crs1 = new Curso();
        crs1.nome = "Programação em Java";
        crs1.duracao = 40;
        crs1.instrutor = "Carlos Silva";
        crs1.print();
    }
}
