package exercicio1;

import java.util.ArrayList;
import java.util.Scanner;

public class Exercicio2 {

	public static void main(String[] args) {

		Scanner io = new Scanner(System.in);
		
		ArrayList<FiguraGeometrica> figuras = new ArrayList<FiguraGeometrica>();

		int option = 0;
		do {

			System.out.println(" Selecione a opera��o:");
			System.out.println("   1 - Adicionar");
			System.out.println("   2 - Remover");
			System.out.println("   3 - Listar");
			System.out.println(" ---------------------");
			System.out.println("   0 - Sair");
			option = Integer.parseInt( io.nextLine() );
			switch(option) {
				case 1:
					System.out.println(" Quer inserir um C�rculo(1) ou um Ret�ngulo(2)? ");
					switch( Integer.parseInt(io.nextLine())) {
						case 1:
							//C�rculo
							System.out.println("   D� um nome ao C�rculo: ");
							String nome = io.nextLine();
							System.out.println("   Informe o Raio: ");
							double raio = Double.parseDouble(io.nextLine());
							Circulo c = new Circulo(nome,raio);
							figuras.add(c);
							break;
						case 2:
							//Ret�ngulo
							System.out.println("   D� um nome ao Ret�ngulo: ");
							String nome = io.nextLine();
							System.out.println("   Informe o tamanho do Lado 1: ");
							double l1 = Double.parseDouble(io.nextLine());
							System.out.println("   Informe o tamanho do Lado 2: ");
							double l2 = Double.parseDouble(io.nextLine());
							Retangulo r = new Retangulo(nome,l1,l2);
							figuras.add(r);
							break;
						default:
							System.out.println("CANCELADO: OP��O INV�LIDA!!");
							break;
					}
					break;
				case 2:
					System.out.println("   Informe o �ndice da figura a ser removida: ");
					int index = Integer.parseInt(io.nextLine());
					if(index>-1 && index < figuras.size()) {
						figuras.remove(index);
						System.out.println("ITEM REMOVIDO COM SUCESSO");
					} else {
						System.out.println("INDICE N�O EXISTE!!");
					}
					break;
				case 3:
					for(int i=0; i<figuras.size(); i++) {
						figuras.get(i).printResume();
					}
					break;
				case 0:
					break;//ONLY TO NOT PRINT ANNYTHING
				default:
					System.out.println(" OP��O INV�LIDA!!");
					break;
			}
		}while(option!=0);
		System.out.println("Saindo...");
	}

}
