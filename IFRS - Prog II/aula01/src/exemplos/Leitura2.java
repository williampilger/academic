package exemplos;

import java.util.Scanner;

public class Leitura2 {

	public static void main(String[] args) {

		System.out.println("Digita um nome");
		String nome = (new Scanner(System.in)).nextLine();//p�ssima pr�tica, j� que assim vc nunca descarta o item, mas s� pra testar

		System.out.printf("O nome informado foi: %s", nome);
	}

}
