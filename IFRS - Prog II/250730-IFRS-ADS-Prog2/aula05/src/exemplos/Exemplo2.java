/*
 * Fazendo tudo em um único arquivo para facilitar a execução no linux. Fabe-se que esta é uma péssima prática.
 * Rodar, sem gerar arquivo `.class` com:
 *  $ java Exemplo2.java
 */

public class Exemplo2 {
    
    public static void main(String[] args) {
        
        Coordenada c1 = new Coordenada(1.1234, 5.6789);
        Coordenada c2 = new Coordenada(1.1234, 5.6789);

        if( c1==c2 ) {
            System.out.println("São o mesmo objeto");
        } else {
            System.out.println("São objetos diferentes");
        }


    }
}



class Coordenada {

    public double latitude;
    public double longitude;

    public Coordenada(double latitude, double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

}