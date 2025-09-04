package jogo;

import jogo.pessoas.Jogador;
import jogo.pessoas.Treinador;

public class Equipe {
	private Treinador treinador;
	private Jogador goleiro;
	private Jogador fixo;
	private Jogador pivo;
	private Jogador alaD;
	private Jogador alaE;
	
	public Equipe(Treinador treinador, Jogador goleiro, Jogador fixo, Jogador pivo, Jogador alaD, Jogador alaE) {
		super();
		this.treinador = treinador;
		this.goleiro = goleiro;
		this.fixo = fixo;
		this.pivo = pivo;
		this.alaD = alaD;
		this.alaE = alaE;
	}

	public Treinador getTreinador() {
		return treinador;
	}

	public void setTreinador(Treinador treinador) {
		this.treinador = treinador;
	}

	public Jogador getGoleiro() {
		return goleiro;
	}

	public void setGoleiro(Jogador goleiro) {
		this.goleiro = goleiro;
	}

	public Jogador getFixo() {
		return fixo;
	}

	public void setFixo(Jogador fixo) {
		this.fixo = fixo;
	}

	public Jogador getPivo() {
		return pivo;
	}

	public void setPivo(Jogador pivo) {
		this.pivo = pivo;
	}

	public Jogador getAlaD() {
		return alaD;
	}

	public void setAlaD(Jogador alaD) {
		this.alaD = alaD;
	}

	public Jogador getAlaE() {
		return alaE;
	}

	public void setAlaE(Jogador alaE) {
		this.alaE = alaE;
	}
	
	public void print(String posicao) {
		System.out.println(" Equipe " + posicao + ":");
		System.out.println("   - Treinador: " + this.getTreinador().getNome());
		System.out.println("   - Goleiro: " + this.getGoleiro().getNome());
		System.out.println("   - Fixo: " + this.getFixo().getNome());
		System.out.println("   - Pivo: " + this.getPivo().getNome());
		System.out.println("   - Ala D: " + this.getAlaD().getNome());
		System.out.println("   - Ala E: " + this.getAlaE().getNome());
	}
	
}
