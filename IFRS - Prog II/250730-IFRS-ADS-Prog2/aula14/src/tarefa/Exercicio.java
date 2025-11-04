package tarefa;

public class Exercicio {

    @SuppressWarnings("unused")
    public static void main(String[] args) {

        // 1. Imprimir apenas a letra 'i' usando a String pais
        String pais = "Brasil";
        System.out.println(pais.charAt(4));

        // 2. Imprimir a palavra "Principio" usando o split na String cidade
        // Dica: o split pode usar qualquer separador, inclusive o espaco em branco
        String cidade = "Bom Principio";
        System.out.println(cidade.split(" ")[1]);

        // 3. Imprima a String "Maria" usando o operador substring
        String nome = "Antonia Maria Moreira";
        System.out.println(nome.substring(8, 13));

        // 4. Usando o printf e as Strings pais e cidade,
        // imprima a seguinte String:
        // "Cidade: Bom Principio - Pais: Brasil"
        System.out.printf("Cidade: %s - Pais: %s\n", cidade, pais);

        // 5. Imprima o seguinte double com 5 casas decimais
        double numero = 5345.19367566;
        System.out.printf("%.5f", numero);

    }
}
