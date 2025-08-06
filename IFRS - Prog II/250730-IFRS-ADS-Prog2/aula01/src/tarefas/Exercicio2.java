/**
 * 2. Escreva um programa que la um numero do teclado e que determine se ele eh par ou impar.
 */
package tarefas;

import java.util.Scanner;

public class Exercicio2 {

	public static void main(String[] args) {

		Scanner leitor = new Scanner(System.in);

		System.out.println("Digita um valor pra A: ");
		int a = Integer.parseInt(leitor.nextLine());
		leitor.close();
		
		boolean ehPar =  a % 2 == 0;

		System.out.printf("A eh %s", ehPar ? "Par" : "Impar");			
		
	}

}
