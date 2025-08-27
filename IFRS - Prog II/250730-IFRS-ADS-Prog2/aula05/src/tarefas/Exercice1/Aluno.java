package Exercice1;

public class Aluno {

    public String nome;
    public int idade;
    public String curso;

    public void print() {
        System.out.println("Aluno");
        System.out.println("  ├─ Nome: " + nome);
        System.out.println("  ├─ Idade: " + idade);
        System.out.println("  └─ Curso: " + curso);
    }

}