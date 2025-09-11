package exercicios.parte3;

public class Curso {
	private String nome;
	private Disciplina[] disciplinas;
	
	public Curso(String nome, Disciplina[] disciplinas) {
		super();
		this.nome = nome;
		this.disciplinas = disciplinas;
	}
	public Curso(String nome) {
		super();
		this.nome = nome;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Disciplina[] getDisciplinas() {
		return disciplinas;
	}
	public void setDisciplinas(Disciplina[] disciplinas) {
		this.disciplinas = disciplinas;
	}
	public void addDisciplina(Disciplina disciplina) {
		this.disciplinas[this.disciplinas.length - 1] = disciplina;
	}
	public void rmDisciplina(Disciplina disciplina) {
		System.out.println("NÃO IMPLEMENTEI O MÉTODO DE REMOSSÃO!!");
	}
}
