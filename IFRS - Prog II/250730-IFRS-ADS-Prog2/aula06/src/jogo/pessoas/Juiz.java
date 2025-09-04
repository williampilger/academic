package jogo.pessoas;

public class Juiz {
	private String nome;

	public Juiz(String nome) {
		super();
		this.nome = nome;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public void print() {
		System.out.println(" Juiz:" + this.nome);
	}
}
