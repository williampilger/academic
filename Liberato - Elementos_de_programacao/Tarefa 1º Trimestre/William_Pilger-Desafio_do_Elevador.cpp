#include <stdio.h>
#include <stdlib.h>
#include <conio2.h>
#include <string.h>
#include <windows.h>
#include <time.h>
#include <string.h>
int main(void)
{
	int PRI=0, SEG=0, TER=0, QUA=0, QUI=0, SEX=0, SET=0, OIT=0, NON=0, DES=0, AND=0, Y=1, PTNC=0, PDDE=0, LOTACAO=15, TOTAL=0, CIC=1, C=0;
	char X;
	do
	{
		clrscr();
		if(AND==10) CIC=0;
		if(AND==1) CIC=1;
		if(CIC==1) {AND++; textcolor(4); gotoxy(44,3); printf("@"); gotoxy(43,4); printf("@@@"); gotoxy(42,5); printf("@@@@@"); gotoxy(41,6); printf("@@@@@@@"); gotoxy(40,7); printf("@@@@@@@@@");} 
		if(CIC==0) {AND--; textcolor(4); gotoxy(40,3); printf("@@@@@@@@@"); gotoxy(41,4); printf("@@@@@@@"); gotoxy(42,5); printf("@@@@@"); gotoxy(43,6); printf("@@@"); gotoxy(44,7); printf("@");}
		if (AND==1 and C!=0) {PTNC=0; clrscr(); gotoxy(12,1); printf("@@@@@ @@@@@ @@@@@ @     @@@@@"); gotoxy(12,2); printf("@       @   @     @     @   @"); gotoxy(12,3); printf("@       @   @     @     @   @"); gotoxy(12,4); printf("@       @   @     @     @   @"); gotoxy(12,5); printf("@@@@@ @@@@@ @@@@@ @@@@@ @@@@@"); gotoxy(1, 8); printf("@@@@@ @@@@@ @    @ @@@@@ @     @   @ @@@@@ @@@@  @@@@@"); gotoxy(1,9); printf("@     @   @ @@   @ @     @     @   @   @   @   @ @   @"); gotoxy(1,10); printf("@     @   @ @ @  @ @     @     @   @   @   @   @ @   @"); gotoxy(1,11); printf("@     @   @ @  @ @ @     @     @   @   @   @   @ @   @"); gotoxy(1,12); printf("@     @   @ @   @@ @     @     @   @   @   @   @ @   @"); gotoxy(1,13); printf("@@@@@ @@@@@ @    @ @@@@@ @@@@@ @@@@@ @@@@@ @@@@  @@@@@"); getch(); clrscr();}
		C=1;
		switch(AND)
		{
			case 1:
				PDDE=PDDE-PRI; PRI=0; break;
			case 2:
				PDDE=PDDE-SEG; SEG=0; break;
			case 3:
				PDDE=PDDE-TER; TER=0; break;
			case 4:
				PDDE=PDDE-QUA; QUA=0; break;
			case 5:
				PDDE=PDDE-QUI; QUI=0; break;
			case 6:
				PDDE=PDDE-SEX; SEX=0; break;
			case 7:
				PDDE=PDDE-SET; SET=0; break;
			case 8:
				PDDE=PDDE-OIT; OIT=0; break;
			case 9:
				PDDE=PDDE-NON; NON=0; break;
			case 10:
				PDDE=PDDE-DES; DES=0; break;
			default:
				break;
		}
		
		do
		{
			textcolor(14);
			gotoxy(1,2); printf("Pessoas aguardando:"); gotoxy(3,3); printf("Primeiro: %2d", PRI); gotoxy(3,4); printf("Segundo:  %2d", SEG); gotoxy(3,5); printf("Terceiro: %2d", TER); gotoxy(3,6); printf("Quarto:   %2d", QUA); gotoxy(3,7); printf("Quinto:   %2d", QUI); gotoxy(18,3); printf("Sexto:  %2d", SEX); gotoxy(18,4); printf("Setimo: %2d", SET); gotoxy(18,5); printf("Oitavo: %2d", OIT); gotoxy(18,6); printf("Nono:   %2d", NON); gotoxy(18,7); printf("Decimo: %2d", DES);
			textcolor(2);
			gotoxy(1,9); printf("Pessoas transportadas neste ciclo:- %2d", PTNC); gotoxy(1,10); printf("Pessoas dentro do elevador:-------- %2d", PDDE); gotoxy(1,11); printf("Lotacao:--------------------------- %2d", LOTACAO); gotoxy(1,12); printf("Andar atual:----------------------- %2d", AND); gotoxy(1,14); printf("Total de pessoas transportadas: %2d", TOTAL); gotoxy(1,15); printf("##################################################");
			textcolor(4);
			gotoxy(1,16); printf("OBS: Para marcar o decimo andar, digite ZERO!"); gotoxy(1,17); printf("Caso mais ninguem entre, neste andar, tecle enter."); gotoxy(25,18); printf("Ou"); gotoxy(1,19); printf("Digite o numero do andar para o qual a pessoa ira:");
			if(PDDE>=LOTACAO) {gotoxy(1,19); printf("Lotacao maxima!!!!"); getch(); break;}
			gotoxy(1,19); Y=1;X=13; X=getch();
			
				switch(X)
				{
					case 49:
						if(AND==1) break;
						PRI++; PTNC++; PDDE++; TOTAL++; break;
					case 50:
						if(AND==2) break;
						SEG++; PTNC++; PDDE++; TOTAL++; break;
					case 51:
						if(AND==3) break;
						TER++; PTNC++; PDDE++; TOTAL++; break;
					case 52:
						if(AND==4) break;
						QUA++; PTNC++; PDDE++; TOTAL++; break;
					case 53:
						if(AND==5) break;
						QUI++; PTNC++; PDDE++; TOTAL++; break;
					case 54:
						if(AND==6) break;
						SEX++; PTNC++; PDDE++; TOTAL++; break;
					case 55:
						if(AND==7) break;
						SET++; PTNC++; PDDE++; TOTAL++; break;
					case 56:
						if(AND==8) break;
						OIT++; PTNC++; PDDE++; TOTAL++; break;
					case 57:
						if(AND==9) break;
						NON++; PTNC++; PDDE++; TOTAL++; break;
					case 48:
						if(AND==10) break;
						DES++; PTNC++; PDDE++; TOTAL++; break;
					case 13:
						Y=0; break;
					default:
						break;		
				}
		}while(Y==1);
	
	}while(AND!=20);
	
	
    	getch();
}
