package exercicios.parte3;

import java.util.Scanner;

public class Exercicio3 {

	public static void main(String[] args) {

		Scanner io = new Scanner(System.in);
		
		int n = Integer.parseInt(io.nextLine());
		
		String[] lista = new String[n];
		
		int soma = 0;
		for(int i=0;i<n;i++) {
			System.out.println("Informe a string de Nº" + (i+1) + ": ");
			lista[i] = io.nextLine();
			soma += lista[i].length();
		}
		
		double media = soma / lista.length;

		System.out.println("A média da extenção dos valores lidos é de " + media + " caracteres");
	}

}
