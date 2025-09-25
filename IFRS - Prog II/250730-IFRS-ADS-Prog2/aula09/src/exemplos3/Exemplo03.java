package exemplos3;

public class Exemplo03 {

	public static void main(String[] args) {

		Jogador j1 = new Jogador(
				"Teste",
				"de Jogador",
				"1 de Abril de 2029",
				"Av. dom Vicente",
				"eeee"
				);
		
		Treinador t1 = new Treinador(
				"Teste",
				"de Treinador",
				"01 de Abril de 2029",
				"Feliz - RS, Brasil",
				false
				);

		System.out.println(" -------------------");
		System.out.println("  " + j1.getNome() + " " + j1.getSobrenome());
		System.out.println(" -------------------");
		

	}

}
