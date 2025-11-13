package ExerciciosRevisao2;

public class Piloto extends Pessoa {

	private int numeroDeTitulos;
	private Equipe equipe;
	
	public Piloto(String nome, String nacionalidade, int numeroDeTitulos, Equipe equipe) {
		super(nome, nacionalidade);
		this.numeroDeTitulos = numeroDeTitulos;
		this.equipe = equipe;
	}
	
	public int getNumeroDeTitulos() {
		return numeroDeTitulos;
	}
	public void setNumeroDeTitulos(int numeroDeTitulos) {
		this.numeroDeTitulos = numeroDeTitulos;
	}
	public Equipe getEquipe() {
		return equipe;
	}
	public void setEquipe(Equipe equipe) {
		this.equipe = equipe;
	}
	
	public void print() {
		System.out.println("---------------------------------------------------------------");
		System.out.printf( "| Nome: %s | Nac.: %s | Titulos: %d \n", this.getNome(), this.getNacionalidade(), this.numeroDeTitulos);
		System.out.printf( "| Equipe: %s | País: %s\n", this.equipe.getNome(), this.equipe.getPais());
		System.out.println("---------------------------------------------------------------");
	}
}
