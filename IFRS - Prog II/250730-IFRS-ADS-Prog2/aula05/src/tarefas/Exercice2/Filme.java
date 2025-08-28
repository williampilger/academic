package Exercice1;

public class Filme {

    public String titulo;
    public int populacao;
    public String estado;

    public void print() {
        System.out.println("Filme");
        System.out.println("  ├─ Título: " + titulo);
        System.out.println("  ├─ População: " + populacao);
        System.out.println("  └─ Estado: " + estado);
    }
}