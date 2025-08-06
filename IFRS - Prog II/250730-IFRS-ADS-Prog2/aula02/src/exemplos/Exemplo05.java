package exemplos;

import java.util.Scanner;

public class Exemplo05 {

	private static void print(String out){
		System.out.println(out);
	}

	public static void main(String[] args) {
		
		int option = 0;
		Scanner leitor = new Scanner(System.in);

		do {
			
			Exemplo05.print("\n\n Menu:\n   1 - Teste 1\n   2 - Teste 2\n   3 - Teste 3\n   0 - Sair/Encerrar");
			
			option = Integer.parseInt( leitor.nextLine() );
			switch(option){
				case 1:
					Exemplo05.print("Primeiro exemplo de texto do menu!");
					break;
				case 2:
					Exemplo05.print("Segundo exemplo!");
					break;
				case 3:
					Exemplo05.print("Caramba! Você pressionou 3 - o.0");
					break;
				case 0://só pra não printar nada
					break;
				default:
					Exemplo05.print("Opção Inválida!");
					break;
			}

		} while(option != 0);

		Exemplo05.print("Você escolheu sair!");

	}
}
