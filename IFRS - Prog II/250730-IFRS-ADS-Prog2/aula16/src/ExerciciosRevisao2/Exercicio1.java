package ExerciciosRevisao2;

import java.util.ArrayList;
import java.util.Scanner;

public class Exercicio1 {

	public static void main(String[] args) {
		
		Scanner io = new Scanner(System.in);
		
		ArrayList<Piloto> lista = new ArrayList<Piloto>();
		
		int option = 0;
		do {
			System.out.println("\n 1 - Adicionar um Piloto");
			System.out.println(" 2 - Listar Pilotos");
			System.out.println(" 3 - Remover um Piloto");
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
				System.out.println(" Dados do Piloto:");
				System.out.println("   Nome: ");
				String pilotoNome = io.nextLine();
				System.out.println("   Nacionalidade: ");
				String pilotoNacionalidade = io.nextLine();
				System.out.println("   Número de títulos: ");
				int pilotoTitulos = Integer.parseInt(io.nextLine());
				
				System.out.println(" Dados da Equipe do Piloto:");
				System.out.println("   Nome: ");				
				String equipeNome = io.nextLine();				
				System.out.println("   País: ");
				String equipePais = io.nextLine();
				
				lista.add( new Piloto(pilotoNome, pilotoNacionalidade, pilotoTitulos, new Equipe(equipeNome, equipePais))); 
				
				System.out.println("Adicionado com sucesso!");
				break;
			case 2:
				lista.forEach( piloto -> piloto.print());
				break;
			case 3:
				
				System.out.println("Informe o nome do piloto a ser removido: ");
				String nomeInformado = io.nextLine();
				boolean removido = false;
				for( int i=0; i < lista.size(); i ++) {
					if( lista.get(i).getNome().equals(nomeInformado) ) {
						lista.remove(i);
						removido=true;
						System.out.println("O piloto foi removido!");
						break;
					}
				}
				if(!removido) System.out.println("Não foi encontrado nenhum piloto com esse nome!");
				break;
			}
			
		} while(option != 0);

	}

}
