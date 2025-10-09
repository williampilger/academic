package exemplos;

public class exemplo2 {

	public static void main(String[] args) {
		
//		try {			
//			Motorista m1 = new Motorista("Pestinha", 14);
//			System.out.println("O Motorista tem idade de " + m1.getIdade() + " anos.");
//		} catch( RuntimeException e) {
//			System.out.printf("Msg: %s\n", e.getMessage());
//		}
//		
//		Motorista m2 = new Motorista("Pestinha", 18);
//		System.out.println("O Motorista tem idade de " + m2.getIdade() + " anos.");
//		
//		//Note que a classe Motorista2 exige que se use try-catch. Remover vai gerar um erro de compilação
//		Motorista2 m3 = null;
//		try {
//			m3 = new Motorista2("Pestinha", 14);
//			System.out.println("O Motorista tem idade de " + m3.getIdade() + " anos.");
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
		
		
		Motorista3 m4 = null;
		try {
			m4 = new Motorista3("Pest", 14);
		} catch (Exception e) {
			System.out.printf("Msg: %s\n", e.getMessage());
		}
	}
	
}
