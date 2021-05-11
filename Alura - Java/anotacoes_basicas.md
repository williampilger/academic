#Java

## Instalando Java JDK no Ubuntu

> sudo apt install default-jdk

## Primeiro programa

No **Exemplo 1** veremos uma forma de fazer um simples Hello World. O Arquivo **SEMPRE** precisa ser salvo como nome_da_classe.java, então, salve o codigo abaixo como `HelloWorld.java`.

Codigo:

```java
public class HelloWorld{
	public static void main(String arg[]){
		System.out.println("Hello World!");
	}
}
```
Compile usando:
> javac HelloWorld

Executando:
> java HelloWorld

No **Exemplo 2** mostramos uma forma de passar parâmetros para a função main:

```java
public class HelloWorld{
	public static void main(String arg[]){
		System.out.println("Hello " + arg[0] + "!");
	}
}
```
Compile novamente, e execute usando:
> javac HelloWorld.java && java HelloWorld William

## Organizando arquivos em pacotes

Para organizar corretamente os codigos, salve os arquivos referentes ao seu projeto dentro de uma pasta que terá o nome do pacote. Para adefinir à qual pacote determinado arquivo .java pertense, use `package nome_do_pacote;`. Veja o exemplo abaixo, onde o arquivo deve ser salvo em **teste/HelloWorld.java**:

```java
package teste;
public class HelloWorld{
	public static void main(String arg[]){
		System.out.println("Hello " + arg[0] + "!");
	}
}
```
Para compilar e rodar:
> javac teste/HelloWorld.java && java teste.HelloWorld William

OBS.: Para executar, SEMPRE é usado `.` no lugar da `/`.

