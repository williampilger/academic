package exercicio1;

import java.util.ArrayList;

public class Fazenda extends Imovel {
	
	public ArrayList<String> cultivos;
	public boolean possuiMoradia;
	public double areaPreservacao;
	
	public void print() {
		System.out.println(" ----------------------------------------");
		super.print(false);
		System.out.println(" Cultivos:");
		for(int i=0;i<this.cultivos.size();i++) {
			System.out.println("   - " + this.cultivos.get(i));
		}
		System.out.printf(" �rea preserva��o: %.2fm�%n", this.areaPreservacao);
		System.out.println(" Possui Moradia: " + (this.possuiMoradia ? "SIM" : "N�O") );
		System.out.println(" ----------------------------------------");
	}
}
