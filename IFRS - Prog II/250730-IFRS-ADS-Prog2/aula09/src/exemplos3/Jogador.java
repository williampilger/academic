package exemplos3;

public class Jogador extends Pessoa {
	
	private String posicao;

	public Jogador(String nome, String sobrenome, String dataNascimento, String endereco, String posicao) {
		super(nome, sobrenome, dataNascimento, endereco);
		this.posicao = posicao;
	}

	public String getPosicao() {
		return posicao;
	}

	public void setPosicao(String posicao) {
		this.posicao = posicao;
	}
	
	
	
}
