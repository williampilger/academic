package ExerciciosRevisao2;

public class Carro implements CrudS {

	public String modelo;
	public String marca;
	
	public Carro(String modelo, String marca) {
		super();
		this.modelo = modelo;
		this.marca = marca;
	}
	
	public String toStr() {
	    String separador = "---------------------------------------------------------------";
	    return separador + "\n" +
	           String.format("| Modelo: %s\n", this.modelo) +
	           String.format("| Fabricante: %s\n", this.marca) +
	           separador + "\n";
	}
	
	public void imprimir() {
		System.out.print(this.toStr());
	}
	
	public void gravar() {
		FileUtils.strToFileLine( this.toStr() );
	}
}
