package exercicios.parte3;

import java.util.Scanner;

public class Exercicio3 {

	public static void main(String[] args) {

		Scanner io = new Scanner(System.in);
		
		int n = Integer.parseInt(io.nextLine());
		
		String[] lista = new String[n];
		
		int soma = 0;
		for(int i=0;i<n;i++) {
			System.out.println("Informe a string de N�" + (i+1) + ": ");
			lista[i] = io.nextLine();
			soma += lista[i].length();
		}
		
		double media = soma / lista.length;

		System.out.println("A m�dia da exten��o dos valores lidos � de " + media + " caracteres");
	}

}
