package exercicio1;

public class Casa extends Imovel {
	public int pavimentos;
	public boolean aquecimentoDeAgua;
	public int numBanheiros;
	public int numQuartos;
	
	public void print() {
		System.out.println(" ----------------------------------------");
		super.print(false);
		System.out.printf(" Pavimentos: %d%n", this.pavimentos);
		System.out.printf(" Banheiros: %d%n", this.numBanheiros);
		System.out.printf(" Quartos: %d%n", this.numQuartos);
		System.out.println(" Aquecimento de água: " + (this.aquecimentoDeAgua ? "SIM" : "NÃO") );
		System.out.println(" ----------------------------------------");
	}
}
