/**
 * 5. Fa�a um programa que calcule o aumento de um sal�rio. Ele deve ler do teclado o valor do sal�rio
 *    e a porcentagem de aumento. Finalmente, imprima na tela o valor do sal�rio, o percentual de
 *    aumento, o valor do aumento e o novo sal�rio.
 */

package tarefas;

import java.util.Scanner;

public class Exercicio5 {

	public static void main(String[] args) {

		Scanner leitor = new Scanner(System.in);
		System.out.println("Informa o sal�rio atual (R$): ");
		double salario = Double.parseDouble(leitor.nextLine());
		System.out.println("Informa aumento (%): ");
		double aumento = Double.parseDouble(leitor.nextLine());
		leitor.close();
		
		double novoSalario = salario * (1 + aumento/100);
		
		System.out.printf("O novo sal�rio do funcion�rio � de R$ %.2f", novoSalario);
	}

}
