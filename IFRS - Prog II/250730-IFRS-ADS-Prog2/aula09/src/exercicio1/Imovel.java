package exercicio1;

public class Imovel {
	public String endereco;
	public double valorDeVenda;
	public double area;
	
	
	public void print() {this.print(true);}
	public void print(boolean printMark) {
		if(printMark) System.out.println(" ----------------------------------------");
		
		System.out.println(" Endereço: " + this.endereco);
		System.out.printf(" Área: %.2fm²%n", this.area);
		System.out.printf(" Valor de Venda: R$ %.2f%n", this.valorDeVenda);
		
		if(printMark) System.out.println(" ----------------------------------------");
	}
}
