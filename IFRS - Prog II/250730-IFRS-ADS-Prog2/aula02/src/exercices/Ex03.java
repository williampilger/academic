/**
  * 3. Desenvolva um programa para uma loja de tintas. Inicialmente, o programa deverá pedir o tamanho
  *    em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para
  *    cada 3 metros quadrados e que a tinta é vendida em latas de 10 litros, que custam R$50. Informe
  *    ao usuário a quantidade de latas de tinta necessária para pintar a área e o preço total.
 */

package exercices;

import java.util.Scanner;

public class Ex03 {
    
    public static void main(String[] args){

        Scanner io = new Scanner(System.in);

        Ex01.print("\nInforme a área a ser píntada (m²): ");
        double area = Float.parseFloat(io.nextLine());

        double litros = area / 3;
        int numeroLatas = (int) Math.ceil( litros / 10 );
        double custo = numeroLatas * 50;

        Ex01.print("Você precisará de %.2f litros de tinta, comprando assim %d latas, totalizando R$ %.2f \n\n", litros, numeroLatas, custo);

    }
}
