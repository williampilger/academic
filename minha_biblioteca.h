int soma_digitos(int n){
	int s=0;
	while(n!=0){
		s += n%10;
		n /= 10;
	}
	return(s);
}

int conta_rep_dig(int n, int d){
	//recebe numero inteiro, e digito a buscar por repetição
	//retorna quantidade de vezes que d aparece em n
	int x, cont=0;
	while(n!=0){
		x=n%10;
		if(x==d) cont++;
		n = n/10;
	}
	return(cont);
}

int conta_divisores(int n){//recebe numero, retorna numero de divisores exeto ele mesmo
	int x=0, i;
	for(i=1;i<=n/2;i++) if(n%i==0) x++;
	return(x);
}

int fatorial(int n){
	int nf=1, i=2;
	if(n!=0){
		while(i<=n){
			nf*=i;
			i++;
		}
	}
	return (nf);
}

int conta_digitos(int n){
	int dig=0;
	if(n<0) n *= -1; //se numero segativo inverte ele
	while(n>0){
		n /= 10;
		dig++;
	}
	return(dig);
}

void le_vetor(int v[N]){
	int i;
	for(i=0;i<N;i++){
		scanf("%d", &v[i]);
	}
}

void escreve_vetor(int v[N]){
	int i;
	for(i=0;i<N;i++){
		printf("\n%d", v[i]);
	}
}

void interseccao(int x[N], y[N], z[N]){
	int i, j, w=0;
	for(i=0;i<N;i++){
		for(j=0;j<N;j++){
			if(x[i]==y[j]){
				z[w]=x[i];
				w++;
				break;
			}
		}
	}
}

void escreve_diferentes(int A[N],int B[N]){//escreve os valores que têm em A que ão estão em B
	int i, j, flag;
	for(i=0;i<N;i++){
		flag=0;
		for(j=0;j<N;j++){
			if(A[i]==B[j]){
				flag=1;
				break;
			}
		}
		if(!flag) printf("\n%d", A[i]);
	}
}












