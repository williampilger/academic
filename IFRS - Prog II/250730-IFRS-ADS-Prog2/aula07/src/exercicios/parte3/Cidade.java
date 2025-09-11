package exercicios.parte3;

public class Cidade {
	
	private String nome;
	private String pais;
	private String estado;
	private int habitantes;
	
	public Cidade(String nome, String estado, String pais, int habitantes) {
		super();
		this.nome = nome;
		this.pais = pais;
		this.estado = estado;
		this.habitantes = habitantes;
	}
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public String getEnderecoCompleto() {
		return this.nome + " - " + this.estado + " - " + this.getPais(); 
	}
	public int getHabitantes() {
		return habitantes;
	}
	public void setHabitantes(int habitantes) {
		this.habitantes = habitantes;
	}
	
}
