package Exercice2;

public class Animal {

    public String nome;
    public String especie;
    public int idade;

    public void print() {
        System.out.println("Animal");
        System.out.println("  ├─ Nome: " + nome);
        System.out.println("  ├─ Espécie: " + especie);
        System.out.println("  └─ Idade: " + idade + " anos");
    }
}