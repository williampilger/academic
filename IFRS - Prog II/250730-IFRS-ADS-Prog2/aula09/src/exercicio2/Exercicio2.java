package exercicio2;

public class Exercicio2 {

	public static void main(String[] args) {

		Fornecedor f1 = new Fornecedor("William","pilger@gmail.com","5554999999999", 5000,2000);
		System.out.println("O saldo do fornecedor F1 �: " + f1.obterSaldo() );

		Empregado e1 = new Empregado("William","pilger@gmail.com","5554999999999", 15, 8500, 0.272);
		System.out.println("O sal�rio l�quido do Empregado F1 � de: " + e1.calcularSalario());
		
		Administrador a1 = new Administrador("William","pilger@gmail.com","5554999999999", 15, 8500, 0.272, 500);
		System.out.println("O sal�rio l�quido do Administrador A1 � de: " + a1.calcularSalarioAdmin());
		
		Operario o1 = new Operario("William","pilger@gmail.com","5554999999999", 15, 8500, 0.272, 6500, 0.1);
		System.out.println("O sal�rio l�quido do Operario O1 � de: " + o1.calcularSalarioOperario());
		
		Vendedor v1 = new Vendedor("William","pilger@gmail.com","5554999999999", 15, 8500, 0.272, 90000, 0.2);
		System.out.println("O sal�rio l�quido do Vendedor V1 � de: " + v1.calcularSalarioVendedor());
		
	}

}
