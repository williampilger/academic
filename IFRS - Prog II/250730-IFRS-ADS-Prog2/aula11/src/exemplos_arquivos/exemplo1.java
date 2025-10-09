package exemplos_arquivos;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class exemplo1 {

	public static void main(String[] args) {

		File f = new File("txts");
		f.mkdir();
		
		File a = new File("txts/nomes.txt");
		
		ArrayList<String> lista = new ArrayList<String>();
		lista.add("Diuliano");
		lista.add("Diuliana");
		lista.add("Diuliana's mother");
		lista.add("Diuliana's father");
		
		try {
			
			a.createNewFile();
//			FileWriter fw = new FileWriter(a); //No append --->>> so, the old content will be lost
			FileWriter fw = new FileWriter(a, true);// Append is true, so, the content will be ADDED
			BufferedWriter bw = new BufferedWriter(fw);
			
			// File handling
			bw.write("Pilgerson Williamson");
			bw.write("\n");
			bw.write("Testerson Janderson");
			bw.write("\n");
			for(int i=0; i<lista.size();i++) {
				bw.write(lista.get(i) + "\n");
			}
			
			bw.close();
			fw.close();
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
