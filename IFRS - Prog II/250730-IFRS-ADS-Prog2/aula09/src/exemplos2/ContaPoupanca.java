package exemplos2;

public class ContaPoupanca extends Conta {
	
	public double juros;
	
	public void atualizaSaldo() {
		double quantia = this.saldo * (this.juros/100);
		this.depositar(quantia);
	}
	
}
