package exemplos3;

public class Treinador extends Pessoa {
	
	private boolean retranqueiro;

	public Treinador(String nome, String sobrenome, String dataNascimento, String endereco, boolean retranqueiro) {
		super(nome, sobrenome, dataNascimento, endereco);
		this.retranqueiro = retranqueiro;
	}

	public boolean isRetranqueiro() {
		return retranqueiro;
	}

	public void setRetranqueiro(boolean retranqueiro) {
		this.retranqueiro = retranqueiro;
	}
	
	
}
