package jogo;

import jogo.outros.Bola;
import jogo.outros.Quadra;
import jogo.pessoas.Jogador;
import jogo.pessoas.Juiz;
import jogo.pessoas.Treinador;

public class Exercicio1 {

	public static void main(String[] args) {

		Treinador t1 = new Treinador("Mariel");
		Jogador g1 = new Jogador("Nomizin Um");
		Jogador g2 = new Jogador("O cara");
		Jogador g3 = new Jogador("Chavez");
		Jogador g4 = new Jogador("Bruxo");
		Jogador g5 = new Jogador("Táz");
		Equipe e1 = new Equipe(t1, g1,g2,g3,g4,g5);
		
		Treinador t2 = new Treinador("Topazio");
		Jogador g6 = new Jogador("Nomizin Dois");
		Jogador g7 = new Jogador("the man");
		Jogador g8 = new Jogador("Hugo");
		Jogador g9 = new Jogador("Gnomo");
		Jogador g10 = new Jogador("Patinho Fei");
		Equipe e2 = new Equipe(t2, g6,g7,g8,g9,g10);
		
		Juiz j = new Juiz("Penelope Xarmouza");
		
		Bola b = new Bola("Penalti");
		
		Quadra q = new Quadra(25,42);
		
		Futebol f = new Futebol(e1, e2, j, b, q);
		
		f.print();
	}

}
