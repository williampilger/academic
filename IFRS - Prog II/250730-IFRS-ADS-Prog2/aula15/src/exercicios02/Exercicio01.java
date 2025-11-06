package exercicios02;

import java.util.Arrays;
import java.util.Scanner;

public class Exercicio01 {

	public static void main(String[] args) {

		Scanner leitor = new Scanner(System.in);

		System.out.println("Quantos números você irá adicionar à lista: ");
		int q = Integer.parseInt(leitor.nextLine());
		int[] numeros = new int[q];
		
		for(int i=0;i<q;i++) {
			System.out.printf("Informe um número %d: ", i+1);
			numeros[i] = Integer.parseInt(leitor.nextLine());
		}

		Arrays.sort(numeros);
		int n;
		do {
			System.out.println("Informe um número para buscar (ou um número negativo para parar): ");
			n = Integer.parseInt(leitor.nextLine());
			if( n >=0 ) {
				int res = Arrays.binarySearch(numeros, n);
				if( res >= 0) {
					System.out.println("Foi encontrado na posição " + res + " do array.");
				} else {
					System.out.println("Não foi encontrado.");
				}
			}
			
		} while( n >= 0);
		
	}

}
