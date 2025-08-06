package exemplos;

import java.util.Scanner;

public class Condicionais {

	public static void main(String[] args) {

		Scanner leitor = new Scanner(System.in);

		System.out.println("Digita um valor pra A: ");
		int a = Integer.parseInt(leitor.nextLine());
		System.out.println("Digita um valor pra B: ");
		int b = Integer.parseInt(leitor.nextLine());

		if( a > b) {
			System.out.println("A eh Maior que B");
		} else if (b > a) {
			System.out.println("A eh Menor que B");
		} else {
			System.out.println("As cachaca sao iguais!");
		}
		
		leitor.close();
	}
}