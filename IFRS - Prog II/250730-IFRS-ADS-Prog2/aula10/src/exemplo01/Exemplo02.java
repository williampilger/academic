package exemplo01;

public class Exemplo02 {

	public static void main(String[] args) {

		Produto[] produtos = new Produto[2];
		
		produtos[0] = new Livro(123, 50.68, "O Dilema do Porco Espinho", "Leandro Karnal");
		produtos[1] = new Livro(123, 50.68, "O Dilema do Porco Espinho", "Leandro Karnal");

		for(int i=0; i< produtos.length;i++) {
			produtos[i].imprimir();
		}
		
	}

}
