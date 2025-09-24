package exercicio1;

public class Imovel {
	public String endereco;
	public double valorDeVenda;
	public double area;
	
	
	private void print_aux() {
		System.out.println(" Endere�o: " + this.endereco);
		System.out.printf(" �rea: %.2fm�%n", this.area);
		System.out.printf(" Valor de Venda: R$ %.2f%n", this.valorDeVenda);
	}
	
	public void print() {
		this.print(true);
	}
	
	public void print(boolean printMark) {
		if(printMark) {			
			System.out.println(" ----------------------------------------");
		}
		this.print_aux();
		if(printMark) {			
			System.out.println(" ----------------------------------------");
		}
	}
}
