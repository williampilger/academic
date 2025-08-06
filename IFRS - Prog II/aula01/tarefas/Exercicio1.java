/**
 * 1. Faca um programa que leia 2 numeros inteiros do teclado e que imprima na tela a soma,
 * substracao, multiplicacao, divisao e resto da divisao desses dois numeros.
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
		
		System.out.printf(" Soma: %d \n Subtracao: %d \n Multiplicacao: %d \n Divisao: %d", soma, sub, mult, div);
		
	}

}
