package exercicio2;

public class Exercicio2 {

	public static void main(String[] args) {

		Fornecedor f1 = new Fornecedor("William","pilger@gmail.com","5554999999999", 5000,2000);
		System.out.println("O saldo do fornecedor F1 é: " + f1.obterSaldo() );

		Empregado e1 = new Empregado("William","pilger@gmail.com","5554999999999", 15, 8500, 0.272);
		System.out.println("O salário líquido do Empregado F1 é de: " + e1.calcularSalario());
		
		Administrador a1 = new Administrador("William","pilger@gmail.com","5554999999999", 15, 8500, 0.272, 500);
		System.out.println("O salário líquido do Administrador A1 é de: " + a1.calcularSalarioAdmin());
		
		Operario o1 = new Operario("William","pilger@gmail.com","5554999999999", 15, 8500, 0.272, 6500, 0.1);
		System.out.println("O salário líquido do Operario O1 é de: " + o1.calcularSalarioOperario());
		
		Vendedor v1 = new Vendedor("William","pilger@gmail.com","5554999999999", 15, 8500, 0.272, 90000, 0.2);
		System.out.println("O salário líquido do Vendedor V1 é de: " + v1.calcularSalarioVendedor());
		
	}

}
