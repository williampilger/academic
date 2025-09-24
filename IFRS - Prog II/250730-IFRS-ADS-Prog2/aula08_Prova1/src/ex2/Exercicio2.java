package ex2;

import java.util.ArrayList;
import java.util.Scanner;

public class Exercicio2 {

	public static void main(String[] args) {

		Scanner io = new Scanner(System.in);
		
		System.out.print("Informe o número de strings a serem coletadas: ");
		int n = Integer.parseInt(io.nextLine());
		
		ArrayList<String> group = new ArrayList<String>();
		int maior_lenght=0,menor_lenght=0;
		
		System.out.println("Preencha agora as strings");
		for(int i=0;i<n;i++) {
			System.out.print(" Valor para a posicao " + (i+1) + ": ");
			String temp = io.nextLine();
			System.out.println();// só pra pular a linha
			
			int itemLen = temp.length();
			if(i==0) {
				maior_lenght = menor_lenght = itemLen;
			} else {
				if(itemLen > maior_lenght) {
					maior_lenght = itemLen;
				} else if(itemLen < menor_lenght) {
					menor_lenght = itemLen;
				}
			}
			group.add(temp);
		}

		System.out.println("Os MAIORES valores são:");
		for(int i=0;i<n;i++) {
			if( group.get(i).length() == maior_lenght) {
				System.out.println("  - " + group.get(i));
			}
		}
		System.out.println("Os MENORES valores são:");
		for(int i=0;i<n;i++) {
			if( group.get(i).length() == menor_lenght) {
				System.out.println("  - " + group.get(i));
			}
		}

	}

}
