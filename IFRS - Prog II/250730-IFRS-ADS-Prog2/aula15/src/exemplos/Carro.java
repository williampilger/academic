package exemplos;

public class Carro {
	
	private static int contador = 0;
	
	private String marca;
	private String modelo;
	
	public Carro(String marca, String modelo) {
		super();
		this.marca = marca;
		this.modelo = modelo;
		contador ++;
	}
	
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	
	public static int getContagem() {
		return contador;
	}
}
