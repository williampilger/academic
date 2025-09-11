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
			System.out.println("  2 - Listar disciplinas");
			System.out.println("  3 - Gerenciar disciplina");
			System.out.println("  0 - Sair / Encerrar");
			System.out.print(" Digite sua opção: ");
			opt = io.nextLine().charAt(0);
			
			switch(opt) {
			case '1':
				adicionarDisciplina(curso, io);
				break;
			case '2':
				listarDisciplinas(curso);
				break;
			case '3':
				gerenciarDisciplina(curso, io);
				break;
			case '0':
				System.out.println("Encerrando...");
				break;
			default:
				System.out.println("Opção inválida!");
				break;
			}
			
		}while( opt != '0');
		
		io.close();
	}
	
	private static void adicionarDisciplina(Curso curso, Scanner io) {
		System.out.print("Nome da disciplina: ");
		String nome = io.nextLine();
		
		System.out.print("Semestre: ");
		int semestre = Integer.parseInt(io.nextLine());
		
		System.out.print("Lotação máxima: ");
		int lotacao = Integer.parseInt(io.nextLine());
		
		System.out.print("Deseja cadastrar um professor? (s/n): ");
		char resposta = io.nextLine().toLowerCase().charAt(0);
		
		Disciplina disciplina;
		if(resposta == 's') {
			System.out.print("Nome do professor: ");
			String nomeProfessor = io.nextLine();
			System.out.print("Idade do professor: ");
			int idadeProfessor = Integer.parseInt(io.nextLine());
			
			Professor professor = new Professor(nomeProfessor, idadeProfessor);
			disciplina = new Disciplina(nome, semestre, lotacao, professor);
		} else {
			disciplina = new Disciplina(nome, semestre, lotacao);
		}
		
		curso.addDisciplina(disciplina);
		System.out.println("Disciplina '" + nome + "' adicionada com sucesso!");
	}
	
	private static void listarDisciplinas(Curso curso) {
		System.out.println("\n--- Disciplinas do curso '" + curso.getNome() + "' ---");
		if(curso.getDisciplinas().isEmpty()) {
			System.out.println("Nenhuma disciplina cadastrada.");
		} else {
			for(int i = 0; i < curso.getDisciplinas().size(); i++) {
				Disciplina disc = curso.getDisciplinas().get(i);
				System.out.println((i+1) + ". " + disc.getNome() + 
					" - Semestre: " + disc.getSemestre() + 
					" - Alunos: " + disc.getAlunos().size() + "/" + disc.getLotacao());
				if(disc.getProfessor() != null) {
					System.out.println("   Professor: " + disc.getProfessor().getNome());
				}
			}
		}
		System.out.println();
	}
	
	private static void gerenciarDisciplina(Curso curso, Scanner io) {
		if(curso.getDisciplinas().isEmpty()) {
			System.out.println("Nenhuma disciplina cadastrada.");
			return;
		}
		
		listarDisciplinas(curso);
		System.out.print("Escolha uma disciplina (número): ");
		int escolha = Integer.parseInt(io.nextLine()) - 1;
		
		if(escolha < 0 || escolha >= curso.getDisciplinas().size()) {
			System.out.println("Disciplina inválida!");
			return;
		}
		
		Disciplina disciplina = curso.getDisciplinas().get(escolha);
		
		char opt = '?';
		do {
			System.out.println("\n--- Gerenciando disciplina '" + disciplina.getNome() + "' ---");
			System.out.println("  1 - Cadastrar aluno");
			System.out.println("  2 - Listar alunos");
			System.out.println("  0 - Voltar");
			System.out.print(" Digite sua opção: ");
			opt = io.nextLine().charAt(0);
			
			switch(opt) {
			case '1':
				cadastrarAluno(disciplina, io);
				break;
			case '2':
				listarAlunos(disciplina);
				break;
			case '0':
				System.out.println("Voltando...");
				break;
			default:
				System.out.println("Opção inválida!");
				break;
			}
		} while(opt != '0');
	}
	
	private static void cadastrarAluno(Disciplina disciplina, Scanner io) {
		if(disciplina.getAlunos().size() >= disciplina.getLotacao()) {
			System.out.println("Disciplina já está na lotação máxima!");
			return;
		}
		
		System.out.print("Nome do aluno: ");
		String nome = io.nextLine();
		
		System.out.print("Idade do aluno: ");
		int idade = Integer.parseInt(io.nextLine());
		
		Aluno aluno = new Aluno(nome, idade);
		disciplina.matriculaAluno(aluno);
	}
	
	private static void listarAlunos(Disciplina disciplina) {
		System.out.println("\n--- Alunos da disciplina '" + disciplina.getNome() + "' ---");
		if(disciplina.getAlunos().isEmpty()) {
			System.out.println("Nenhum aluno matriculado.");
		} else {
			for(int i = 0; i < disciplina.getAlunos().size(); i++) {
				Aluno aluno = disciplina.getAlunos().get(i);
				System.out.println((i+1) + ". " + aluno.getNome() + " - " + aluno.getIdade() + " anos");
			}
		}
		System.out.println();
	}

}
