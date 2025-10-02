package exemplo01;

public class Produto {
	
	public int codigo;
	public double preco;
	
	public Produto(int codigo, double preco) {
		super();
		this.codigo = codigo;
		this.preco = preco;
	}
	
	public void imprimir() {
		System.out.println(" Codigo: " + this.codigo);
		System.out.println(" Preço: " + this.preco);
	}
	
}
