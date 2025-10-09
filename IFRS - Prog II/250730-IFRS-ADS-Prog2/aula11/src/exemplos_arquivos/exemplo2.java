package exemplos_arquivos;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;

public class exemplo2 {

	public static void main(String[] args) {

		File a = new File("txts/nomes.txt");
		
		try {
			
			FileReader fr = new FileReader(a);
			BufferedReader br = new BufferedReader(fr);

			String linha;
			do {				
				linha = br.readLine();
				if(linha!=null) System.out.println(">> "+ linha);
			} while(linha!=null);
			
			br.close();
			fr.close();
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

}
