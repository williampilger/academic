package exercicio2;

public class Operario extends Empregado {

	private double valorProducao;
	private double comissao;
	
	public Operario(String nome, String email, String telefone, int codigoSetor, double salarioBase, double imposto,
			double valorProducao, double comissao) {
		super(nome, email, telefone, codigoSetor, salarioBase, imposto);
		this.valorProducao = valorProducao;
		this.comissao = comissao;
	}

	public double getValorProducao() {
		return valorProducao;
	}
	public void setValorProducao(double valorProducao) {
		this.valorProducao = valorProducao;
	}
	public double getComissao() {
		return comissao;
	}
	public void setComissao(double comissao) {
		this.comissao = comissao;
	}

	public double calcularSalarioOperario() {
		return super.calcularSalario() + ( this.getComissao() * this.getValorProducao());
	}
}
