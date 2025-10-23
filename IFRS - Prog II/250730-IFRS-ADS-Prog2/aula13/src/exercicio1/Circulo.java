package exercicio1;

public class Circulo extends FiguraGeometrica {

	public double raio;
	
	public Circulo(String nome, double raio) {
		super(nome);
		this.raio = raio;
	}

	@Override
	public double calculaPerimetro() {
		return Math.PI*this.raio * 2;
	}

	@Override
	public double calculaArea() {
		return Math.PI * Math.pow(this.raio,2); 
	}
	
	@Override
	public void printResume() {
		System.out.printf("   [CIRCULO] %15s : r=%.2f\n", this.nome, this.raio);
	}
	
}