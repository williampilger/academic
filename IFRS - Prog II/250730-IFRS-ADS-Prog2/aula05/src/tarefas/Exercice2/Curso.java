package Exercice2;

public class Curso {

    public String nome;
    public int duracao; // em meses
    public String modalidade; // Presencial, EAD, Híbrido

    public void print() {
        System.out.println("Curso");
        System.out.println("  ├─ Nome: " + nome);
        System.out.println("  ├─ Duração (meses): " + duracao);
        System.out.println("  └─ Modalidade: " + modalidade);
    }
}