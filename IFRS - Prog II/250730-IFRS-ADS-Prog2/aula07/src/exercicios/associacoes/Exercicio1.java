package exercicios.associacoes;

import java.util.Scanner;

public class Exercicio1 {

	public static void main(String[] args) {
		
		Scanner io = new Scanner(System.in);

		Planeta planeta = new Planeta();
		
		System.out.println("Informa o nome do Planeta: ");
        planeta.setNome(io.nextLine());
        
        System.out.println("Informa o volume do Planeta (km³): ");
        planeta.setVolume(Double.parseDouble(io.nextLine()));
        
	}

}
