/**
  * 2. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
  *    Um número primo é aquele que é divisível somente por ele mesmo e por 1.
 */

package exercices;

import java.util.Scanner;

public class Ex02 {
    
    public static void main(String[] args){

        Scanner io = new Scanner(System.in);

        Ex01.print("\nInforme um número inteiro: ");
        int number = Integer.parseInt(io.nextLine());

        boolean ehPrimo = true;

        for( int i=2; i<number; i++ ){

            if( number%i == 0){
                ehPrimo = false;
                break;//tem necessidade nenhuma de seguir daqui
            }

        }

        Ex01.print("O número informado %s primo!\n\n", ehPrimo ? "é" : "não é");

    }
}
