package Exercice2;

public class Filme {

    public String titulo;
    public String diretor;
    public int duracao;

    public void print() {
        System.out.println("Filme");
        System.out.println("  ├─ Título: " + titulo);
        System.out.println("  ├─ Duração: " + duracao + " minutos");
        System.out.println("  └─ Diretor: " + diretor);
    }
}