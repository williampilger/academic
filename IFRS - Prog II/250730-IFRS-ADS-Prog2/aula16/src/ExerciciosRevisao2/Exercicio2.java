package ExerciciosRevisao2;

import java.util.ArrayList;
import java.util.Scanner;

public class Exercicio2 {

	public static void main(String[] args) {

Scanner io = new Scanner(System.in);
		
		ArrayList<CrudS> lista = new ArrayList<CrudS>();
		
		int option = 0;
		do {
			System.out.println("\n 1 - Adicionar um Carro");
			System.out.println(" 2 - Adicionar uma Pessoa");
			System.out.println(" 3 - Imprimir todos");
			System.out.println(" 3 - Gravar todos");
			System.out.println(" ---------------------------");
			System.out.println(" 0 - Sair");
			System.out.println("");
			System.out.println("Digite sua opção: ");
			option = Integer.parseInt(io.nextLine());
			System.out.println("\n");
			
			switch(option) {
			case 0:
				System.out.println("Você escolheu sair!");
				break;
			case 1:
				System.out.println(" Dados do Carro:");
				System.out.println("   Modelo: ");
				String modelo = io.nextLine();
				System.out.println("   Marca: ");
				String marca = io.nextLine();
				
				lista.add( new Carro(modelo, marca)); 
				
				System.out.println("Adicionado com sucesso!");
				break;
			case 2:
				System.out.println(" Dados da Pessoa:");
				System.out.println("   Nome: ");
				String nome = io.nextLine();
				System.out.println("   Sobrenome: ");
				String sobrenome = io.nextLine();
				
				lista.add( new Pessoa2(nome, sobrenome));
				
				System.out.println("Adicionado com sucesso!");
				break;
			case 3:
				lista.forEach( item -> item.imprimir());
				System.out.println("Imprimidos!");
				break;
			case 4:
				lista.forEach( item -> item.gravar());
				System.out.println("Gravados!");
				break;
				
				
			}
			
		} while(option != 0);

	}

}
