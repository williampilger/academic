/**
 * 6. Escreva um programa que solicite as seguintes informa��es sobre uma viagem: quilometragem
 *    inicial do carro, quilometragem do carro ap�s a viagem e o n�mero de litros de combust�vel
 *    consumidos. Com base nessas informa��es calcule a m�dia de consumo do carro por litro e
 *    imprima na tela.
 */

package tarefas;

import java.util.Scanner;

public class Exercicio6 {

	public static void main(String[] args) {
		
		Scanner leitor = new Scanner(System.in);
		System.out.println("Quilometragem inicial: ");
		double km0 = Double.parseDouble(leitor.nextLine());
		System.out.println("Quilometragem final: ");
		double km1 = Double.parseDouble(leitor.nextLine());
		System.out.println("Combustivel consumido (L): ");
		double consumo = Double.parseDouble(leitor.nextLine());
		leitor.close();
		
		double distancia = km1 - km0;
		double kmpl = distancia / consumo;
		
		System.out.printf("O consumo m�dio foi de %.2f km/l", kmpl);
	}

}
