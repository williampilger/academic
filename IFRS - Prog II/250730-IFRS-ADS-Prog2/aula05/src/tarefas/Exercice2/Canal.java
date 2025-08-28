package Exercice2;

public class Canal {

    public String titulo;
    public String proprietario;
    public int inscritos;

    public void print() {
        System.out.println("Canal");
        System.out.println("  ├─ Título: " + titulo);
        System.out.println("  ├─ Inscritos: " + inscritos);
        System.out.println("  └─ Proprietario: " + proprietario);
    }
}