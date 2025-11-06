package Exercicio01;

public class Notas {

	public static double calcularMedia(double[] notas) throws Exception {
		
		if(notas.length != 3) {			
			throw new Exception("Devem haver três notas!!!");
		}
		
		double soma = 0;
		for(int i=0; i < 3; i++) {
			soma += notas[i];
		}
		return soma / 3;
	}
	
	public static String situacao(double media) {
		if( media >= 7) return "Aprovado";
		if( media >= 5) return "Recuperação";
		return "Reprovado";
	}
}
