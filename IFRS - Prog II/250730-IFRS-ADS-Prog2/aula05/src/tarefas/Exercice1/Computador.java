package Exercice1;

public class Computador {

    public String marca;
    public String modelo;
    public int ano;

    public void print() {
        System.out.println("Computador");
        System.out.println("  ├─ Marca: " + marca);
        System.out.println("  ├─ Modelo: " + modelo);
        System.out.println("  └─ Ano: " + ano);
    }
}