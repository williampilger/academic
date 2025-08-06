/**
 * 4. Crie um programa que calcule e mostre o volume de uma esfera. O raio da esfera será fornecido
 *    pelo usuário através do teclado (tipo de dado double). Pesquisa a fórmula para cálcule de volume
 *    da esfera e considere para PI o valor 3.14159 (tipo de dado double).
 */

package tarefas;

import java.util.Scanner;

public class Exercicio4 {

	public static void main(String[] args) {
		
		Scanner leitor = new Scanner(System.in);
		System.out.println("Informa o raio da esfera (cm): ");
		double raio = Double.parseDouble(leitor.nextLine());
		leitor.close();
		
		double volume = 4/3 * Math.PI * Math.pow(raio,3);
		
		System.out.printf("O volume da esfera é '%2f' cm³.", volume);
	}

}
