/**
 * 5. Crie um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.
 *    Por exemplo, o fatorial de 3 é 6, ou seja, 3*2*1 = 6.
 *    Já, o fatorial de 4 é 24, ou seja, 4*3*2*1 = 24.
 *    E assim sucessivamente…
 */

package exercices;

import java.util.Scanner;

public class Ex05 {

    public static void main(String[] args){

        Scanner io = new Scanner(System.in);

        Ex01.print("\nInforme um número inteiro: ");
        int number = Integer.parseInt(io.nextLine());

        int total = number;
        for( int i = number-1; i>0; i-- ){
            total *= i;
        }

        Ex01.print(" %d! = %d\n\n", number, total);

    }
}
