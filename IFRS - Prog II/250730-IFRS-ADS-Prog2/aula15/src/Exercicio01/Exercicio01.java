package Exercicio01;

import java.util.Scanner;

public class Exercicio01 {

	public static void main(String[] args) {


		Scanner leitor = new Scanner(System.in);

		System.out.println("Informa a nota N1: ");
		double n1 = Double.parseDouble(leitor.nextLine());
		System.out.println("Informa a nota N2: ");
		double n2 = Double.parseDouble(leitor.nextLine());
		System.out.println("Informa a nota N3: ");
		double n3 = Double.parseDouble(leitor.nextLine());

		try {
			double media = Notas.calcularMedia(new double[] {n1, n2, n3});
			
			System.out.printf("A média do aluno é %.2f, e a situação é '%s'", media, Notas.situacao(media));
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
