package exemplos;

public class Exemplo02 {

	public static void main(String[] args) {
		
		System.out.println("Antes: " + Carro.getContagem() );
		Carro c1 = new Carro("VW", "Jetta");
		Carro c2 = new Carro("Ford", "Fusion");
		Carro c3 = new Carro("Honda", "Civic");
		System.out.println("Depois: " + Carro.getContagem() );
		
		
	}

}
