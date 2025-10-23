package exercicio1;

public class Exercicio1 {

	public static void main(String[] args) {

		Circulo c1 = new Circulo("Circulo 1", 5);
		Retangulo r1 = new Retangulo("Retangulo 1", 6, 8);
//		System.out.println("c1.A: " + c1.calculaArea());
//		System.out.println("c1.C: " + c1.calculaPerimetro());
//		System.out.println("r1.A: " + r1.calculaArea());
//		System.out.println("r1.C: " + r1.calculaPerimetro());
		c1.printResume();
		r1.printResume();

	}

}
