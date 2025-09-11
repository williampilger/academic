package exercicios.associacoes;

public class Prefeito {
	
	private String nome;
	private int idade;
	private Partido partido;
	
	public Prefeito(String nome, int idade, Partido partido) {
		super();
		this.nome = nome;
		this.idade = idade;
		this.partido = partido;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
	}
	public Partido getPartido() {
		return partido;
	}
	public void setPartido(Partido partido) {
		this.partido = partido;
	}
	
	
}
