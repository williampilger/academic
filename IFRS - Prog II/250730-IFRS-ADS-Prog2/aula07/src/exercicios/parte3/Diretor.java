package exercicios.parte3;

public class Diretor {
	private String nome;
	private String sobrenome;
	private int numeroPremios;

	public Diretor(String nome, String sobrenome, int numeroPremios) {
		super();
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.numeroPremios = numeroPremios;
	}
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getSobrenome() {
		return sobrenome;
	}
	public String getNomeCompleto() {
		return this.nome + " " + this.sobrenome;
	}
	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}
	public int getNumeroPremios() {
		return numeroPremios;
	}
	public void setNumeroPremios(int numeroPremios) {
		this.numeroPremios = numeroPremios;
	}
}
