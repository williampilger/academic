package ex1;

public class Pesquisador {
	private String nome;
	private String area;
	
	public Pesquisador(String nome, String area) {
		super();
		this.nome = nome;
		this.area = area;
	}
	public Pesquisador() {
		super();
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
}
