package exemplos4;

public class ContaPoupanca extends Conta {
	
	public ContaPoupanca(String correntista, double juros) {
		super(correntista);
		this.juros = juros;
	}

	public double juros;
	
	public void atualizaSaldo() {
		double quantia = this.saldo * (this.juros/100);
		this.depositar(quantia);
	}
	
}
