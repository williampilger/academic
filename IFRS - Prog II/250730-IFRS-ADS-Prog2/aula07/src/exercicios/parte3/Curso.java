package exercicios.parte3;

import java.util.ArrayList;
import java.util.List;

public class Curso {
	private String nome;
	private List<Disciplina> disciplinas;
	
	public Curso(String nome, List<Disciplina> disciplinas) {
		super();
		this.nome = nome;
		this.disciplinas = disciplinas;
	}
	public Curso(String nome) {
		super();
		this.nome = nome;
		this.disciplinas = new ArrayList<>();
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public List<Disciplina> getDisciplinas() {
		return disciplinas;
	}
	public void setDisciplinas(List<Disciplina> disciplinas) {
		this.disciplinas = disciplinas;
	}
	public void addDisciplina(Disciplina disciplina) {
		this.disciplinas.add(disciplina);
	}
	public void rmDisciplina(Disciplina disciplina) {
		System.out.println("MÉTODO DE REMOÇÃO NÃO IMPLEMENTADO!!");
	}
}
