package Exercice2;

public class Rodovia {

    public String nome;
    public int extencao;
    public int maxVelocidade;

    public void print() {
        System.out.println("Rodovia");
        System.out.println("  ├─ Nome: " + nome);
        System.out.println("  ├─ Extenção: " + extencao + " km");
        System.out.println("  └─ Velocidade Máxima: " + maxVelocidade + " km/h");
    }
}