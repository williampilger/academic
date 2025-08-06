package exemplos;

import java.util.Scanner;

public class Leitura {

	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);
		
		System.out.println("Digita um numero: ");
		int n = Integer.parseInt(leitor.nextLine());
		
		System.out.println("Usuario digitou " + n);
		System.out.printf("O usuario digitou %d", n);
	}

}
