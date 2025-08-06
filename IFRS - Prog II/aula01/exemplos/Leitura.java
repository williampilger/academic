package exemplos;

import java.util.Scanner;

public class Leitura {

	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);
		
		System.out.println("Digita um número: ");
		int n = Integer.parseInt(leitor.nextLine());
		
		System.out.println("Usuário digitou " + n);
		System.out.printf("O usuário digitou %d", n);
	}

}
