package exemplos4;

public class ContaCorrente extends Conta {

	private double limite;
	
	public ContaCorrente(String correntista, double limite) {
		super(correntista);
		this.limite = limite;
	}

	public boolean sacar(double quantia) {
		if( (this.saldo+this.limite) >= quantia ) {
			this.saldo -= quantia;
			return true;
		}
		return false;
	}
}
