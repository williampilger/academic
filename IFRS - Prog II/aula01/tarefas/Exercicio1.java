/**
 * 1. Fa�a um programa que leia 2 n�meros inteiros do teclado e que imprima na tela a soma,
 * substra��o, multiplica��o, divis�o e resto da divis�o desses dois n�meros.
 */

package tarefas;

import java.util.Scanner;

public class Exercicio1 {

	public static void main(String[] args) {

		Scanner leitor = new Scanner(System.in);

		System.out.println("Digita um valor pra A: ");
		int a = Integer.parseInt(leitor.nextLine());
		System.out.println("Digita um valor pra B: ");
		int b = Integer.parseInt(leitor.nextLine());
		leitor.close();
		
		int soma = a+b;
		int sub = a-b;
		int mult = a*b;
		int div = a/b;
		
		System.out.printf(" Soma: %d \n Subtra��o: %d \n Multiplica��o: %d \n Divis�o: %d", soma, sub, mult, div);
		
	}

}
