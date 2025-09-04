package jogo;

import jogo.outros.Bola;
import jogo.outros.Quadra;
import jogo.pessoas.Juiz;

public class Futebol {
	private Equipe visitante;
	private Equipe mandante;
	private Juiz juiz;
	private Bola bola;
	private Quadra quadra;
	
	public Futebol(Equipe visitante, Equipe mandante, Juiz juiz, Bola bola, Quadra quadra) {
		super();
		this.visitante = visitante;
		this.mandante = mandante;
		this.juiz = juiz;
		this.bola = bola;
		this.quadra = quadra;
	}

	public Equipe getVisitante() {
		return visitante;
	}

	public void setVisitante(Equipe visitante) {
		this.visitante = visitante;
	}

	public Equipe getMandante() {
		return mandante;
	}

	public void setMandante(Equipe mandante) {
		this.mandante = mandante;
	}

	public Juiz getJuiz() {
		return juiz;
	}

	public void setJuiz(Juiz juiz) {
		this.juiz = juiz;
	}

	public Bola getBola() {
		return bola;
	}

	public void setBola(Bola bola) {
		this.bola = bola;
	}

	public Quadra getQuadra() {
		return quadra;
	}

	public void setQuadra(Quadra quadra) {
		this.quadra = quadra;
	}
	
	public void print() {
		System.out.println("-----------------------------------------------");
		this.quadra.print();
		this.juiz.print();
		this.mandante.print("Mandante");
		this.visitante.print("Visitante");
		this.bola.print();
		System.out.println("-----------------------------------------------");
	}
	
}
