package ExerciciosRevisao1;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class Exercicio1 {

	public static void main(String[] args) {
		
		Scanner io = new Scanner(System.in);
		
		//Cria a pasta para os projetos
		File directory = new File("./projects");
		if( !directory.exists() || !directory.isDirectory()) {
			directory.mkdir(); //se não der certo, vai dar throw na hora de ler
		}
		
		ArrayList<Produto> lista = new ArrayList<Produto>();
		
		int option = 0;
		do {
			System.out.println("\n 1 - Adicionar um produto");
			System.out.println(" 2 - Listar produtos");
			System.out.println(" 3 - Salvar para arquivo");
			System.out.println(" 4 - Carregar do arquivo");
			System.out.println(" ---------------------------");
			System.out.println(" 0 - Sair");
			System.out.println("");
			System.out.println("Digite sua opção: ");
			option = Integer.parseInt(io.nextLine());
			System.out.println("\n");
			switch( option ) {
			case 0:
				System.out.println("Você escolheu sair!");
				break;
			case 1:
				System.out.println("Informe o nome do Fabricante: ");
				String fabricante = io.nextLine().replaceAll(";", "");
				System.out.println("Informe o endereço do Fabricante: ");
				String endereco = io.nextLine().replaceAll(";", "");
				
				System.out.println("Informe o código do produto: ");
				int codigo = Integer.parseInt(io.nextLine());
				System.out.println("Informe o nome do Produto: ");
				String nome = io.nextLine().replaceAll(";", "");
				System.out.println("Informe o valor do Produto: ");
				double valor = Double.parseDouble(io.nextLine().replace(",", "."));
				
				lista.add( new Produto(codigo, nome, new Fabricante(fabricante, endereco), valor)); 
				break;
			case 2:
				lista.forEach( produto -> produto.print());
				break;
			case 3:
				System.out.println("Informe o nome do arquivo de saída: ");
				String filename = "./projects/" + io.nextLine();
				try {
					FileWriter fw = new FileWriter(filename, true);// Append is true, so, the content will be ADDED
					BufferedWriter bw = new BufferedWriter(fw);
					lista.forEach(item -> {
						try {
							bw.write(item.fileEntryCreate());
						} catch (IOException e) {
							System.out.println("Impossível salvar o produto de COD. " + item.getCodigo());
							e.printStackTrace();
						}
					});
					bw.close();
					fw.close();
					System.out.println("Salvo com sucesso!");					
				} catch ( Exception e) {
					System.out.println("Impossível salvar para o arquivo, algo deu errado!");
				}
				break;
			case 4:
				File[] files = directory.listFiles();
				if( files.length > 0) {
					while(true) {
						System.out.println("Arquivos disponíveis em ./projects:");
						for (File file : files) {
							if (file.isFile()) { 
								System.out.println(" - "+ file.getName());
							}
						}
						System.out.println("Informe o nome do arquivo a ser lido: ");
						String filename2 = "./projects/" + io.nextLine();
						File file2 = new File(filename2);
						if( file2.exists() ) {
							try {
								FileReader fr = new FileReader(file2);
								BufferedReader br = new BufferedReader(fr);
								
								String linha;
								while ((linha = br.readLine()) != null) {
									try {										
										lista.add(Produto.fileEntryRead(linha));
									} catch(Exception e) {
										System.out.println("Uma linha corrompida foi ignorada!");
									}
					            }
								br.close();
								fr.close();
								System.out.println("Carregado com sucesso!");
							} catch (Exception e) {
								System.out.println("Não foi possível ler o arquivo!");
								e.printStackTrace();
							}
							break;
						} else {
							System.out.println("O arquivo informado não existe!");
						}
					}
					
				} else {
					System.out.println("Não há arquivos disponíveis para carregamento! Salve um primeiro.");
				}
				
				break;
			default:
				System.out.println("Opção inválida!!! Leia com mais atenção!");
				break;
			}
		} while(option != 0);
	}

}
