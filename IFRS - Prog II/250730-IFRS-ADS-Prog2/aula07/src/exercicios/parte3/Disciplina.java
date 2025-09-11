package exercicios.parte3;

import java.util.ArrayList;
import java.util.List;

public class Disciplina {
	
	private String nome;
	private int semestre;
	private int lotacao;
	private Professor professor;
	private List<Aluno> alunos;
	
	public Disciplina(String nome, int semestre, int lotacao, Professor professor) {
		super();
		this.nome = nome;
		this.semestre = semestre;
		this.lotacao = lotacao;
		this.professor = professor;
		this.alunos = new ArrayList<>();
	}
	public Disciplina(String nome, int semestre, int lotacao) {
		super();
		this.nome = nome;
		this.semestre = semestre;
		this.lotacao = lotacao;
		this.alunos = new ArrayList<>();
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getSemestre() {
		return semestre;
	}
	public void setSemestre(int semestre) {
		this.semestre = semestre;
	}
	public int getLotacao() {
		return lotacao;
	}
	public void setLotacao(int lotacao) {
		this.lotacao = lotacao;
	}
	public Professor getProfessor() {
		return professor;
	}
	public void setProfessor(Professor professor) {
		this.professor = professor;
	}
	public List<Aluno> getAlunos() {
		return alunos;
	}
	public void setAlunos(List<Aluno> alunos) {
		this.alunos = alunos;
	}
	public void matriculaAluno(Aluno aluno) {
		if(this.alunos.size() < this.lotacao) {			
			this.alunos.add(aluno);
			System.out.println("Aluno " + aluno.getNome() + " matriculado com sucesso!");
		} else {
			System.out.println("Não há mais espaço nesta turma!");
		}
	}
	public void desmatriculaAluno(Aluno aluno) {
		System.out.println("MÉTODO NÃO IMPLEMENTADO");
	}
}
