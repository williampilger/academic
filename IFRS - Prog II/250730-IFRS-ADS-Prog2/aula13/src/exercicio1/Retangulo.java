package exercicio1;

public class Retangulo extends FiguraGeometrica {

	public double lado1;
	public double lado2;
	
	public Retangulo(String nome, double lado1, double lado2) {
		super(nome);
		this.lado1 = lado1;
		this.lado2 = lado2;
	}

	@Override
	public double calculaPerimetro() {
		return this.lado1*2 + this.lado2*2;
	}

	@Override
	public double calculaArea() {
		return this.lado1 * this.lado2; 
	}
	
	@Override
	public void printResume() {
		System.out.printf(" [RETANGULO] %15s : l1=%.2f l2.2f\n", this.nome, this.lado1, this.lado2);
	}
}
