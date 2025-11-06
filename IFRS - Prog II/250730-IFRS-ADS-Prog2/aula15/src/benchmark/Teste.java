package benchmark;

import java.util.ArrayList;
import java.util.LinkedList;

public class Teste {

	public static void main(String[] args) {

		int n = 100000;
		String s = "String!";
		
		ArrayList<String> al = new ArrayList<String>();
		LinkedList<String> ll = new LinkedList<String>();
		
		//Tempo de inserção no início da lista
		long t1 = System.nanoTime();
		for(int i=0; i<n;i++) {
			al.add(0,s);
		}
		long t2 = System.nanoTime();
		System.out.printf("Tempo da inserção no inicio do ArrayList:  %d%n", t2-t1);
		t1 = System.nanoTime();
		for(int i=0; i<n;i++) {
			ll.add(0,s);
		}
		t2 = System.nanoTime();
		System.out.printf("Tempo da inserção no inicio do LinkedList: %d%n", t2-t1);
		
		//Tempo de inserção no final da lista
		t1 = System.nanoTime();
		for(int i=0; i<n;i++) {
			al.add(s);
		}
		t2 = System.nanoTime();
		System.out.printf("Tempo da inserção no final do ArrayList:  %d%n", t2-t1);
		t1 = System.nanoTime();
		for(int i=0; i<n;i++) {
			ll.add(s);
		}
		t2 = System.nanoTime();
		System.out.printf("Tempo da inserção no final do LinkedList: %d%n", t2-t1);
		
		//Tempo de busca no meio da lista
		t1 = System.nanoTime();
		for(int i=0; i<n;i++) {
			al.get(n/2);
		}
		t2 = System.nanoTime();
		System.out.printf("Tempo da busca no meio do ArrayList:  %d%n", t2-t1);
		t1 = System.nanoTime();
		for(int i=0; i<n;i++) {
			ll.get(n/2);
		}
		t2 = System.nanoTime();
		System.out.printf("Tempo da busca no meio do LinkedList: %d%n", t2-t1);
	}

}
