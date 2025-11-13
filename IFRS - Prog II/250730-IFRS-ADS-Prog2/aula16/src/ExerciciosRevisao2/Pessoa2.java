package ExerciciosRevisao2;

public class Pessoa2 implements CrudS {
	
	public String nome;
	public String sobrenome;
	
	public Pessoa2(String nome, String sobrenome) {
		super();
		this.nome = nome;
		this.sobrenome = sobrenome;
	}
	
	public String toStr() {
	    String separador = "---------------------------------------------------------------";
	    return separador + "\n" +
	           String.format("| Nopme: %s\n", this.nome) +
	           String.format("| Sobrenome: %s\n", this.sobrenome) +
	           separador + "\n";
	}
	
	public void imprimir() {
		System.out.print(this.toStr());
	}

	public void gravar() {
		FileUtils.strToFileLine( this.toStr() );
	}
}
