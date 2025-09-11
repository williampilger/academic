package exercicios.parte3;

import java.util.Scanner;

public class Exercicio2 {

	public static void main(String[] args) {

		Scanner io = new Scanner(System.in);
		
		System.out.println("Informe o nome do novo Curso: ");
		Curso curso = new Curso( io.nextLine());

		char opt = '?';
		do{
			System.out.println(" --- Editando o curso '" + curso.getNome() + "' --- ");
			System.out.println("  1 - Adicionar uma disciplina");
			System.out.println("  0 - Sair / Encerrar");
			System.out.println(" Digite sua opção: ");
			opt = io.nextLine().charAt(0);
			
			switch(opt) {
			case '1':
				
				break;
			default:
				System.out.println("Opção inválida!");
				break;
			}
			
		}while( opt != '0');
	}

}
