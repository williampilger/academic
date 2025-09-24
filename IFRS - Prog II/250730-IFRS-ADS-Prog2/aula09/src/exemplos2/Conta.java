package exemplos2;

public class Conta {

	public String correntista;
	public double saldo;
	
	public void depositar(double quantia) {
		this.saldo += quantia;
	}
	
	public boolean sacar(double quantia) {
		if( this.saldo >= quantia) {
			this.saldo -= quantia;
			return true;
		}
		return false;
	}
	
	public void extrato() {
		System.out.println(" ------------------------------------");
		System.out.println("  Titular: " + this.correntista);
		System.out.printf("    Saldo: R$ %.2f%n", this.saldo);
		System.out.println(" ------------------------------------");
	}

}
