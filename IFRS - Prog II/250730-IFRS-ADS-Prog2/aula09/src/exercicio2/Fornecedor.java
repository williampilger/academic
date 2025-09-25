package exercicio2;

public class Fornecedor extends Pessoa{

	private double valorCredito;
	private double valorDivida;
	
	public Fornecedor(String nome, String email, String telefone, double valorCredito, double valorDivida) {
		super(nome, email, telefone);
		this.valorCredito = valorCredito;
		this.valorDivida = valorDivida;
	}
	
	public double getValorCredito() {
		return valorCredito;
	}
	public void setValorCredito(double valorCredito) {
		this.valorCredito = valorCredito;
	}
	public double getValorDivida() {
		return valorDivida;
	}
	public void setValorDivida(double valorDivida) {
		this.valorDivida = valorDivida;
	}
	public double obterSaldo() {
		return this.getValorCredito() - this.getValorDivida();
	}
}
