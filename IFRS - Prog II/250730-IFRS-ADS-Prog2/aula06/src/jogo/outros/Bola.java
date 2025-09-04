package jogo.outros;

public class Bola {
	private String marca;

	public Bola(String marca) {
		super();
		this.marca = marca;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}
	
	public void print() {
		System.out.println(" Marca da Bola: " + this.marca);
	}
}
