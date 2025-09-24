package exemplos2;

public class ContaCorrente extends Conta {

	public double limite;
	
	public boolean sacar(double quantia) {
		if( (this.saldo+this.limite) >= quantia ) {
			this.saldo -= quantia;
			return true;
		}
		return false;
	}
}
