package jogo.outros;

public class Quadra {
	private int largura;
	private int comprimento;
	
	public Quadra(int largura, int comprimento) {
		super();
		this.largura = largura;
		this.comprimento = comprimento;
	}

	public int getLargura() {
		return largura;
	}

	public void setLargura(int largura) {
		this.largura = largura;
	}

	public int getComprimento() {
		return comprimento;
	}

	public void setComprimento(int comprimento) {
		this.comprimento = comprimento;
	}

	public void print() {
		System.out.println(" Quadra: " + this.comprimento + "m x " + this.largura + "m");
	}
}
