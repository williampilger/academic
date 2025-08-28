/*
 * Fazendo tudo em um único arquivo para facilitar a execução no linux. Fabe-se que esta é uma péssima prática.
 * Rodar, sem gerar arquivo `.class` com:
 *  $ java Exemplo1.java
 */

public class Exemplo1 {
    
    public static void main(String[] args) {
        
        Pessoa p1 = new Pessoa("João", 25, 175);
        Pessoa p2 = new Pessoa("Maria", 30, 160);

        p1.print(false);
        p2.print(true);

        System.out.println("Fazendo aniversário de " + p1.fazerAniversario() + " anos");
        p1.print(true);
    }
}



class Pessoa {

    private String nome;
    private int idade;
    private int altura;

    public Pessoa(String nome, int idade, int altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    public int fazerAniversario(){
        this.idade += 1;
        return this.idade;
    }

    public void print(boolean resumed) {
        if(resumed) {
            System.out.println("Pessoa: " + this.nome + ", " + this.idade + " anos, " + this.altura + "cm");
        } else {
            System.out.println("Pessoa");
            System.out.println("  ├─ Nome: " + this.nome);
            System.out.println("  ├─ Idade: " + this.idade);
            System.out.println("  └─ Altura: " + this.altura);
        }
        return;
    }

}