package Exercice1;

public class Cidade {

    public String nome;
    public int populacao;
    public String estado;

    public void print() {
        System.out.println("Cidade");
        System.out.println("  ├─ Nome: " + nome);
        System.out.println("  ├─ População: " + populacao);
        System.out.println("  └─ Estado: " + estado);
    }
}