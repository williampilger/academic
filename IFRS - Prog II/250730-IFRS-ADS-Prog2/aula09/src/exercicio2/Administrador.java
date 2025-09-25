package exercicio2;

public class Administrador extends Empregado {

	private double ajudaDeCusto;

	public Administrador(String nome, String email, String telefone, int codigoSetor, double salarioBase,
			double imposto, double ajudaDeCusto) {
		super(nome, email, telefone, codigoSetor, salarioBase, imposto);
		this.ajudaDeCusto = ajudaDeCusto;
	}

	public double getAjudaDeCusto() {
		return ajudaDeCusto;
	}

	public void setAjudaDeCusto(double ajudaDeCusto) {
		this.ajudaDeCusto = ajudaDeCusto;
	}
	
	public double calcularSalarioAdmin() {
		return super.calcularSalario() + this.getAjudaDeCusto();
	}
}
