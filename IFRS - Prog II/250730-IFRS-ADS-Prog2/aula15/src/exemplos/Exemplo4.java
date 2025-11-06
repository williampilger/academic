package exemplos;

import java.util.ArrayList;
import java.util.Collections;

public class Exemplo4 {

	public static void main(String[] args) {

		ArrayList<Produto> p = new ArrayList<Produto>(); 

		p.add(new Produto(3,"Panela"));
		p.add(new Produto(5,"Lapis"));
		p.add(new Produto(1,"Caderno"));
		p.add(new Produto(2,"Borracha"));
		
		Collections.sort(p);
		
		for(Produto prod : p) {
			prod.print();
		}
		
		int posicao = Collections.binarySearch(p, new Produto(2,"Borracha"));
		System.out.println("Resultado da busca: " + posicao);
	}

}
