package exemplos;

public class Motorista {
	
	private String nome;
	private int idade;
	
	public Motorista(String nome, int idade) {
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
	public void setIdade(int idade) {
		if(idade < 18) {
			throw new RuntimeException("Não pode ser menor de idade");
		}
		this.idade = idade;
	}
	
	
}
