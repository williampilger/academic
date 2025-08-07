/**
  * 4. Crie um programa que gere a série até que o valor seja maior que 500.
  *    A série de Fibonacci é formada pela sequência 0,1,1,2,3,5,8,13,21,...
 */

package exercices;

import java.util.Scanner;

public class Ex04 {

    public static void main(String[] args){

        int a = 0;
        int b = 1;

        for (int i = 0; a <= 500; i++) {
            Ex01.print("\n%d",a);
            int sum = a + b;
            a = b;
            b = sum;
        }
        
        Ex01.print("\n%d\n\n",a);
    }

}
