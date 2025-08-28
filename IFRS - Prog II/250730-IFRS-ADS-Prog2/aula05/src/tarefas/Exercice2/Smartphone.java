package Exercice2;

public class Smartphone {

    public String   fabricante;
    public double   modelo;
    public int      armazenamento;

    public void print() {
        System.out.println("Chimarrão");
        System.out.println("  ├─ Fabricante: " + fabricante);
        System.out.println("  ├─ Modelo: " + modelo);
        System.out.println("  └─ Armazenamento: " + armazenamento + "GB");
    }
}