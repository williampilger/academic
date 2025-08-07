/**
 * 6. Escreva um aplicativo que localize o menor e o maior de vários inteiros informados pelo usuário.
 *    Suponha que o primeiro valor lido corresponde ao número de valores a serem digitados pelo
 *    usuário na sequência (por exemplo, se o primeiro número digitado for 5, serão lidos 5 números na
 *    sequência, sendo que o seu programa deve indicar o maior e o menor desses 5 números).
 */

package exercices;

import java.util.Scanner;

public class Ex06 {

    public static void main(String[] args){

        Scanner io = new Scanner(System.in);

        Ex01.print("\nInforme um número de valores que serão informados: ");
        int contagem = Integer.parseInt(io.nextLine());

        double max, min;

        Ex01.print("\nInforme o valor de nº 1: ");
        max = min = Float.parseFloat(io.nextLine());
        for( int i=0; i<contagem; i++ ){

            double a = Float.parseFloat(io.nextLine());

            if( a > max ){
                max = a;
            } else if ( a < min ){
                min = a;
            }

        }

        Ex01.print("O maior número informado foi %.2f e o menor foi %.2f", max, min);

    }
}
