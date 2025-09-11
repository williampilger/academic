package exercicios.associacoes;

import java.util.Scanner;

public class Exercicio2 {

	public static void main(String[] args) {

		Scanner io = new Scanner(System.in);
		
		Cidade cidade = new Cidade();
		System.out.println("Informe o nome da cidade: ");
		cidade.setNome( io.nextLine() );
		System.out.println("Informe o número de habitantes: ");
		cidade.setHabitantes( Integer.parseInt(io.nextLine()) );
		
		Partido partido = new Partido("Novo", 120);
		Prefeito prefeito = new Prefeito("Romeu Tadeu", 45, partido);
		
		cidade.setPrefeito(prefeito);
		
	}

}
