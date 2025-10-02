package exemplo01;

public class Livro extends Produto {
	
	public String titulo;
	public String autor;
	
	public Livro(int codigo, double preco, String titulo, String autor) {
		super(codigo, preco);
		this.titulo = titulo;
		this.autor = autor;
	}
	
	public void imprimir() {
		super.imprimir();
		System.out.println(" Titulo: " + this.titulo);
		System.out.println(" Autor: " + this.autor);
	}
}
