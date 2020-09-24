/*
Faça um programa que leia  um horário  no formato de string ( hora:min:seg)
e escreva a hora, o minuto e o segundo. Se o horário for inválido, escreva
-1 na hora, minuto e no segundo.Exemplos:


Leitura     Escrita

10:5:16     h=10,m=5,s=16 
23:10:47    h=23,m=10,s=47
aaabbb      h=-1,m=-1,s=-1
5:80:7      h=-1,m=-1,s=-1
:40:45      h=-1,m=-1,s=-1
23:10:      h=-1,m=-1,s=-1
23:2344     h=-1,m=-1,s=-1
*/

#include <stdio.h>
#include <string.h>

#define TAMSTRING 100 //Tamanho max. da string
#define TAMTEMP 4//tamanho máximo da string temporária

int main(){
    char s[TAMSTRING], temphr[TAMTEMP], tempmin[TAMTEMP], tempseg[TAMTEMP];
    int i, val, ac, hora, minuto, segundo, ihr, imin, iseg, etapa;
    gets(s);
    val=1;
    ihr=imin=iseg=etapa=0;
    for(i=0;i<TAMSTRING&&val==1;i++){//&&val serve para poder parar o FOR no processo
        if(s[i]==':'){
            if(etapa<2) etapa++;
        }else{
            switch(etapa){
                case 0:
                    if(s[i]=='\0') val=0;//já faz parar o for
                    else if(s[i]>='0'&&s[i]<='9'){//se fordígito válido
                        temphr[ihr++]=s[i];
                    }else val=0;
                    
                    break;
                case 1:
                    if(s[i]=='\0') val=0;//já faz parar o for
                    else if(s[i]>='0'&&s[i]<='9'){//se fordígito válido
                        tempmin[imin++]=s[i];
                    }else val=0;
                    
                    break;
                case 2:
                    if(s[i]=='\0') val=2;//já faz parar o for, só que confirmando que finalisou a ultima etapa
                    else if(s[i]>='0'&&s[i]<='9'){//se fordígito válido
                        tempseg[iseg++]=s[i];
                    }else val=0;
                    break;
            }
        }
        
    }
    
    if(val==2&&ihr!=0&&imin!=0&&iseg!=0){
        hora=atoi(temphr);
        minuto=atoi(tempmin);
        segundo=atoi(tempseg);
        if(hora>=0&&hora<24&&minuto>=0&&minuto<60&&segundo>=0&&segundo<60) val=1;
    }else val=0;
    
    if(val!=1) hora=minuto=segundo=-1;
    
    printf("h=%d, m=%d, s=%d", hora, minuto, segundo);
}