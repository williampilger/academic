/**
 * 2. Escreva um programa que l� um n�mero do teclado e que determine se ele � par ou impar.
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

		System.out.printf("A � %s", ehPar ? "Par" : "Impar");			
		
	}

}
