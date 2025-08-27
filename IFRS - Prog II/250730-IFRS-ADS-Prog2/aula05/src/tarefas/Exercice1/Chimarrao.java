package Exercice1;

public class Chimarrao {

    public String   tipo;
    public double   temperatura;
    public int      capacidade; // in ml

    public void print() {
        System.out.println("Chimarrão");
        System.out.println("  ├─ Tipo: " + tipo);
        System.out.println("  ├─ Temperatura: " + temperatura + "°C");
        System.out.println("  └─ Capacidade: " + capacidade + "ml");
    }
}