package ex1;

import java.util.Scanner;

public class Exercicio1 {

	public static void main(String[] args) {

		Scanner io = new Scanner(System.in);
		
		System.out.println("Informe os dados do Pesquisador:");
		Pesquisador p1 = new Pesquisador();
		System.out.print(" Nome: ");
		p1.setNome(io.nextLine());
		System.out.print(" Área: ");
		p1.setArea(io.nextLine());
		
		System.out.println("Informe os dados da Instituição:");
		Instituicao i1 = new Instituicao();
		System.out.print(" Nome: ");
		i1.setNome(io.nextLine());
		System.out.print(" Cidade: ");
		i1.setCidade(io.nextLine());
		
		System.out.print("Informe o nome do seu projeto:");
		String nomeProjeto = io.nextLine();
		Projeto pjt = new Projeto(nomeProjeto, p1, i1);
		
		pjt.print();
	}

}
