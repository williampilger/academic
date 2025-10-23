package exercicio1;

public abstract class FiguraGeometrica {
	
	protected String nome;
	
	public FiguraGeometrica(String nome) {
		this.nome = nome;
	}
	
	public String getNome() {
		return this.nome;
	}
	
	abstract public double calculaPerimetro();
	abstract public double calculaArea();
	abstract public void printResume();
}
