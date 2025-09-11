package exercicios.parte3;

public class Exercicio1 {

	public static void main(String[] args) {

		Cidade cidade = new Cidade("Harmonia", "Rio Grande do Sul", "Brasil", 8000);
		Diretor diretor = new Diretor("Steven", "Spielberg", 78);
		Filme filme = new Filme("Tubarao", diretor, cidade);
		
		filme.print();
	}

}
