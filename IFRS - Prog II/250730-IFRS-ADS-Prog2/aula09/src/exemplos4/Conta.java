package exemplos4;

public class Conta {

	private String correntista;
	protected double saldo;
	
	public Conta(String correntista) {
		super();
		this.correntista = correntista;
		this.saldo = 0;
	}
	
	public void depositar(double quantia) {
		this.saldo += quantia;
	}

	@Override
	public String toString() {
		return "Conta [correntista=" + correntista + ", saldo=" + saldo + "]";
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
