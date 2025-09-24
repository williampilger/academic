package exercicio1;

import java.util.ArrayList;

public class Exercicio1 {
	
	public static void main(String[] args) {
		
		Casa c1 = new Casa();
		c1.endereco = "Teste de endereço";
		c1.valorDeVenda = 150000;
		c1.area = 85;
		c1.aquecimentoDeAgua = false;
		c1.numBanheiros = 1;
		c1.numQuartos = 2;
		c1.print();
		
		Fazenda f1 = new Fazenda();
		f1.endereco = "Teste de endereço";
		f1.valorDeVenda = 360000;
		f1.area = 85000;
		f1.areaPreservacao = 6000;
		f1.cultivos = new ArrayList<String>();
		f1.cultivos.add("Milho");
		f1.cultivos.add("Amora");
		f1.cultivos.add("Feijão");
		f1.print();
		
	}
}
