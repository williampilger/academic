/**
 *  1. Crie um programa que compute o número médio de alunos por turma. Para tal, leia do teclado o
 *     número de turmas e o número de alunos em cada turma. Nenhuma turma pode ter mais de 32
 *     alunos! Se o usuário informar que uma turma tem mais de 32 alunos, pergunte novamente.
 */

package exercices;

import java.util.Scanner;

public class Ex01 {
    
    public static void print(String str, Object... args){//só é public pra eu usar nos demais exercícios
        System.out.printf(str, args);
    }

    public static void main(String[] args){

        Scanner io = new Scanner(System.in);

        Ex01.print("\nInforme o número de turmas: ");
        int nTurmas = Integer.parseInt(io.nextLine());

        int pos = 1; //só pra ser mais bonitinho e não ter "turma zero"
        int sum = 0;

        while(pos <= nTurmas){

            Ex01.print("\nInforme o número de alunos da turma %d [1-32]:", pos);
            int val = Integer.parseInt(io.nextLine());

            if( val>0 && val <=32){
                sum += val;
                pos++;
            } else {
                Ex01.print("\nNúmero inválido. Uma turma tem de 1 a 32 alunos!");
            }

        }

        double med = sum/nTurmas;

        Ex01.print("Em média, a(s) %d turma(s) têm %.2f alunos\n\n", nTurmas, med);


    }
}
