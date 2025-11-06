package exemplos;

public class Produto implements Comparable<Produto>{
	
	private int cod;
	private String nome;
	
	public Produto(int cod, String nome) {
		super();
		this.cod = cod;
		this.nome = nome;
	}

	public int getCod() {
		return cod;
	}

	public void setCod(int cod) {
		this.cod = cod;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public int compareTo(Produto o) {
		int dif = this.cod - o.cod;
		if( dif == 0) {
			return this.nome.compareTo(o.nome);
		}
		return dif;
	}
	
	public void print() {
		System.out.printf(" %d - %s\n", this.cod, this.nome );
	}
	
}
