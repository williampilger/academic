package ExerciciosRevisao2;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class FileUtils {
	public static void strToFileLine(String content) {
		String filename = "./saida.txt";
		try {
			FileWriter fw = new FileWriter(filename, true);// Append is true, so, the content will be ADDED
			BufferedWriter bw = new BufferedWriter(fw);
			try {
				bw.write(content);
			} catch (IOException e) {
				System.out.println("Impossível salvar o conteúdo para o arquivo!");
				e.printStackTrace();
			}
			bw.close();
			fw.close();
			System.out.println("Salvo com sucesso!");					
		} catch ( Exception e) {
			System.out.println("Impossível salvar para o arquivo, algo deu errado!");
		}
	}
}
