/**
 * 3. Faça um programa que leia 2 números inteiros do teclado e que imprima se os números são iguais
 *    ou diferentes. Caso sejam diferentes, imprima o maior deles apenas.
 */

package tarefas;

import java.util.Scanner;

public class Exercicio3 {

	public static void main(String[] args) {

		Scanner leitor = new Scanner(System.in);

		System.out.println("Digita um valor pra A: ");
		int a = Integer.parseInt(leitor.nextLine());
		System.out.println("Digita um valor pra B: ");
		int b = Integer.parseInt(leitor.nextLine());
		leitor.close();

		if(a==b) {
			System.out.println("A e B são iguais!");
		} else {
			System.out.printf("%c é o maior deles!", a>b ? 'A' : 'B');
		}
		
	}
	
}
