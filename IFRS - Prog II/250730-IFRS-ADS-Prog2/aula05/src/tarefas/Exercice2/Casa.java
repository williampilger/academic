package Exercice2;

public class Casa {

    public String endereco;
    public int habitantes;
    public String proprietario;

    public void print() {
        System.out.println("Casa");
        System.out.println("  ├─ Endereço: " + endereco);
        System.out.println("  ├─ Nº de Moradores: " + habitantes);
        System.out.println("  └─ Proprietário: " + proprietario);
    }
}