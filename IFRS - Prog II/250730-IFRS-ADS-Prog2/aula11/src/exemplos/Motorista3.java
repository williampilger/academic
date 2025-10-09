package exemplos;

public class Motorista3 {
	
	private String nome;
	private int idade;
	
	public Motorista3(String nome, int idade) throws Exception {
		super();
		boolean nomeOK=false;
		boolean idadeOK=false;
		try {
			this.setNome(nome);			
			nomeOK=true;
		} catch (Exception e) {}
		try {
			this.setIdade(idade);
			idadeOK=true;
		} catch (Exception e) {}
		
		
		if(nomeOK && idadeOK) return;
		boolean ambos = !nomeOK && !idadeOK;
		throw new Exception( (ambos ? "O nome e a idade estão errados!" : (nomeOK ? "A idade é incorreta" : "O nome é muito curto!") ));
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) throws Exception {
		if(nome.length() < 5) {
			throw new Exception("Nome muito curto!");
		}
		this.nome = nome;
	}
	public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) throws Exception {
		if(idade < 18) {
			throw new Exception("Não pode ser menor de idade");
		}
		this.idade = idade;
	}
	
	
}
