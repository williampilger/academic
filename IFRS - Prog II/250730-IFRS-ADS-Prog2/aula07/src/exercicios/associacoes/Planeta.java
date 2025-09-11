package exercicios.associacoes;

public class Planeta {
	private String nome;
	private double volume;
	
	public Planeta(String nome, double volume) {
		this.nome = nome;
		this.volume = volume;
	}
	public Planeta() {}

	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getVolume() {
		return volume;
	}

	public void setVolume(double volume) {
		this.volume = volume;
	}
	
}
