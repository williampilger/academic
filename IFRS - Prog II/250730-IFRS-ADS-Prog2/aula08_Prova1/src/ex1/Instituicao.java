package ex1;

public class Instituicao {
	private String nome;
	private String cidade;
	
	public Instituicao(String nome, String cidade) {
		super();
		this.nome = nome;
		this.cidade = cidade;
	}
	public Instituicao() {
		super();
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
}
