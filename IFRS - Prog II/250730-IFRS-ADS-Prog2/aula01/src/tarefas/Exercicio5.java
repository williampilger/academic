/**
 * 5. Faça um programa que calcule o aumento de um salário. Ele deve ler do teclado o valor do salário
 *    e a porcentagem de aumento. Finalmente, imprima na tela o valor do salário, o percentual de
 *    aumento, o valor do aumento e o novo salário.
 */

package tarefas;

import java.util.Scanner;

public class Exercicio5 {

	public static void main(String[] args) {

		Scanner leitor = new Scanner(System.in);
		System.out.println("Informa o salário atual (R$): ");
		double salario = Double.parseDouble(leitor.nextLine());
		System.out.println("Informa aumento (%): ");
		double aumento = Double.parseDouble(leitor.nextLine());
		leitor.close();
		
		double novoSalario = salario * (1 + aumento/100);
		
		System.out.printf("O novo salário do funcionário é de R$ %.2f", novoSalario);
	}

}
