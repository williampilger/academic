package exemplos;

public class Motorista2 {
	
	private String nome;
	private int idade;
	
	public Motorista2(String nome, int idade) throws Exception {
		super();
		this.setNome(nome);
		this.setIdade(idade);
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
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
