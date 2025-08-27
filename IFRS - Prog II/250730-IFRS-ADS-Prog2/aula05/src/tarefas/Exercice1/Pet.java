package Exercice1;

public class Pet {

    public String nome;
    public String raca;
    public int idade;

    public void print() {
        System.out.println("Pet");
        System.out.println("  ├─ Nome: " + nome);
        System.out.println("  ├─ raca: " + raca);
        System.out.println("  └─ Idade: " + idade + " anos");
    }
}