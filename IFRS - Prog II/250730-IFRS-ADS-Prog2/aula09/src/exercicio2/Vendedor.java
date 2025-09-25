package exercicio2;

public class Vendedor extends Empregado {

	private double valorVendas;
	private double comissao;

	public Vendedor(String nome, String email, String telefone, int codigoSetor, double salarioBase, double imposto,
			double valorVendas, double comissao) {
		super(nome, email, telefone, codigoSetor, salarioBase, imposto);
		this.valorVendas = valorVendas;
		this.comissao = comissao;
	}
	
	public double getValorVendas() {
		return valorVendas;
	}
	public void setValorVendas(double valorVendas) {
		this.valorVendas = valorVendas;
	}
	public double getComissao() {
		return comissao;
	}
	public void setComissao(double comissao) {
		this.comissao = comissao;
	}
	
	public double calcularSalarioVendedor() {
		return super.calcularSalario() + (this.getComissao() * this.getValorVendas());
	}
	
}
