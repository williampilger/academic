package exercicios.parte3;

public class Disciplina {
	
	private String nome;
	private int semestre;
	private int lotacao;
	private Professor professor;
	private Aluno[] alunos;
	
	public Disciplina(String nome, int semestre, int lotacao, Professor professor) {
		super();
		this.nome = nome;
		this.semestre = semestre;
		this.lotacao = lotacao;
		this.professor = professor;
	}
	public Disciplina(String nome, int semestre, int lotacao) {
		super();
		this.nome = nome;
		this.semestre = semestre;
		this.lotacao = lotacao;
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
	public void matriculaAluno(Aluno aluno) {
		if(this.lotacao > this.alunos.length) {			
			this.alunos[this.alunos.length -1] = aluno;
		} else {
			System.out.println("Não há mais espaço nesta turma!");
		}
	}
	public void desmatriculaAluno(Aluno aluno) {
		System.out.println("MÉTOD NÃO IMPLEMENTADO");
	}
}
