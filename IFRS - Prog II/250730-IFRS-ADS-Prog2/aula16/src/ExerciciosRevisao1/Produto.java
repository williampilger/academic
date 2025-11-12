package ExerciciosRevisao1;

public class Produto {
	private int codigo;
	private String nome;
	private Fabricante fabricante;
	private double valor;
	
	public Produto(int codigo, String nome, Fabricante fabricante, double valor) {
		super();
		this.codigo = codigo;
		this.nome = nome;
		this.fabricante = fabricante;
		this.valor = valor;
	}
	
	public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Fabricante getFabricante() {
		return fabricante;
	}
	public void setFabricante(Fabricante fabricante) {
		this.fabricante = fabricante;
	}
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}
	
	public void print() {
		System.out.println("---------------------------------------------------------------");
		System.out.printf( "| Codigo: %d | Produto: %s | Valor: R$ %.2f\n", this.codigo, this.nome, this.valor);
		System.out.printf( "| Fabricante: %s | Endereço: %s\n", this.fabricante.getNome(), this.fabricante.getEndereco());
		System.out.println("---------------------------------------------------------------");
	}
	
	public String fileEntryCreate() {
		return this.codigo+";"+this.nome+";"+this.valor+";"+this.fabricante.getNome()+";"+this.fabricante.getEndereco()+"\n";
	}
	
	public static Produto fileEntryRead(String entry) throws Exception {
		String[] data = entry.split(";");
		if( data.length != 5) throw new Exception("Impossible import the informed data: " + entry);
		return new Produto(Integer.parseInt(data[0]), data[1], new Fabricante(data[3], data[4]), Double.parseDouble(data[2]));
	}
}
