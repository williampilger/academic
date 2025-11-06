package exemplos;

import java.util.Arrays;
import java.util.Scanner;

public class Exemplo03 {

	public static void main(String[] args) {

		int[] numeros = {35,12,321,5,-5,456,65,987};
		
		Arrays.sort(numeros);
		
		for(int i=0;i<numeros.length;i++) {
			System.out.println(numeros[i]);
		}
		
		Scanner leitor = new Scanner(System.in);
		System.out.println("Qual o número que você deseja saber a posição? ");
		int n = Integer.parseInt(leitor.nextLine());
		
		//Essa função só funciona para arrays préviamente ORDENADOS!!
		int posicao = Arrays.binarySearch(numeros, n);
		System.out.println("A posição dele é: " + posicao);

	}

}
