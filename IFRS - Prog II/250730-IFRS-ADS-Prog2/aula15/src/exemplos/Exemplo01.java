package exemplos;

import java.util.Scanner;

public class Exemplo01 {

	public static void main(String[] args) {
		Scanner leitor = new Scanner(System.in);
		
		System.out.println("Informa o valor de A: ");
		int a = Integer.parseInt(leitor.nextLine());
		
		System.out.println("Informa o valor de B: ");
		int b = Integer.parseInt(leitor.nextLine());

		int soma = Matematica.somar(a, b);
		int multiplicacao = Matematica.multiplicar(a, b);

		System.out.println("A soma é: " + soma);
		System.out.println("A multiplicação é: " + multiplicacao);
		System.out.println("O valor de PI é: " + Matematica.PI);

	}

}
