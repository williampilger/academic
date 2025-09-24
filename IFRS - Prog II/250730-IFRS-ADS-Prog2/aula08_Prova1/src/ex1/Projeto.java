package ex1;

public class Projeto {
	
	private String nome;
	private Pesquisador pesquisador;
	private Instituicao instituicao;

	public Projeto(String nome, Pesquisador pesquisador, Instituicao instituicao) {
		super();
		this.nome = nome;
		this.pesquisador = pesquisador;
		this.instituicao = instituicao;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Pesquisador getPesquisador() {
		return pesquisador;
	}
	public void setPesquisador(Pesquisador pesquisador) {
		this.pesquisador = pesquisador;
	}
	public Instituicao getInstituicao() {
		return instituicao;
	}
	public void setInstituicao(Instituicao instituicao) {
		this.instituicao = instituicao;
	}
	
	public void print() {
		System.out.println("-----------------------------------------------");
		System.out.println("Dados do Projeto");
		System.out.println("  Nome: " + this.getNome());
		System.out.println("  Pesquisador:");
		System.out.println("    Nome: " + this.getPesquisador().getNome());
		System.out.println("    Área: " + this.getPesquisador().getArea());
		System.out.println("  Instituição:");
		System.out.println("    Nome: " + this.getInstituicao().getNome());
		System.out.println("    Cidade: " + this.getInstituicao().getCidade());
		System.out.println("-----------------------------------------------");
	}
}
