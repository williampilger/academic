package exemplos;

import java.util.Scanner;

public class Leitura {

	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);
		
		System.out.println("Digita um n�mero: ");
		int n = Integer.parseInt(leitor.nextLine());
		
		System.out.println("Usu�rio digitou " + n);
		System.out.printf("O usu�rio digitou %d", n);
	}

}
