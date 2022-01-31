# By: will.i.am | Bom Princípio - RS - Brasil
# 2021.10.29
try:
    import os
    from os import path
    import multiplat as mp
    import backend as be
    from math import sqrt
except:
    print("Biblioteca necessária não disponível.\n\nEstamos finalizando.")
    quit()


def inicio():
    mp.limpar_terminal()
    print(' By: will.i.am        ->      github.com/williampilger\n\n\n  ')
    print(" > TESTE DE HIPÓTESES PARA DIFERENÇA DE MÉDIAS <")
    print("\n Para testar hipóteses relacionadas à comparação entre duas médias populacionais.\n")

    print("\n DADOS AMOSTRAIS (AMOSTRA 1)")
    n1 = int(input("   Tamanho da amostra (n1): "))
    x1 = float(input("   Média (x1): ").replace(",","."))
    s1 = float(input("   Desvio Padrão (s1): ").replace(",","."))
    
    #p1 = n1H/n1
    #print("   Proporção para amostra (p1) =", p1, "  <- CALCULADO")

    print("\n DADOS AMOSTRAIS (AMOSTRA 2)")
    n2 = int(input("   Tamanho da amostra (n2): "))
    x2 = float(input("   Média (x2): ").replace(",","."))
    s2 = float(input("   Desvio Padrão (s2): ").replace(",","."))

    s = float(input("\n Nível de significância [percentual 0.05 - 10.00] (s): ").replace(",","."))

    u0 = float(input("\n Valor da diferença das médias a ser testado (costuma ser 0 ): ").replace(",","."))

    l = input("\n Teste Unilateral ou Bilateral? (U/B): ")
    sin = "+"
    if(l == "U" or l == "u"):
        l = 32 #indice da última linha da tabela de distribuição t
    elif(l == "B" or l == "b"):
        l = 0 # indice da primeira linha da tabela de distribuição t
        sin = "+-"
    else:
        print("ALGO DEU ERRADO. LATERALIDADE INFORMADA NÃO É VÁLIDA.")
        quit()

    va = input("\n A variabilidade das duas amostras é igual? (S/N): ")
    if(va=='S' or va=='s'):
        gl = n1+n2 - 2 #Graus de liberdade
        a = sqrt((((n1-1)*s1**2+(n2-1)*s2**2)/gl)*(1/n1+1/n2))
    elif(va=='N' or va=='n'):
        v1 = s1**2 / n1
        v2 = s2**2 / n2
        gl = int((v1+v2)**2 / ( (v1**2 / (n1-1)) + (v2**2 / (n2-1)) ))#Graus de liberdade
        a = sqrt( s1**2/n1 + s2**2/n2)
    else:
        print("ALGO DEU ERRADO. ESCOLHA INFORMADA NÃO É VÁLIDA.")
        quit()

    print("\n\n ## RESULTADOS ##")
    
    print(f"\n t - Da tabela de distribuição t, para {s}% de significancia e {gl} graus de liberdade:")
    tb_t = []
    with open("datatabs/distribuicao_t", "rt") as arquivo:#carregando tabela de distribuição t
        for linha in arquivo:
            tb_t.append(linha.replace("\n", "").split("\t"))
    
    if(gl > 30):
        gl = 30
    i = 0 # ao final do loop, i contém o indice da COLUNA que conterá o valor
    for item in tb_t[l]:#pega linha certa da tabela, para procurar o percentual
        try:
            item = float(item)
            if(item == s):
                break
        except:
            pass
        i += 1

    t = 0
    j = 0 #ao final do loop, j conterá o índica da LINHA que conterá o valor
    for item in tb_t:
        try:
            item = int(item[0])
            if(item == gl):
                t = float(tb_t[j][i])
        except:
            pass
        j += 1

    if(t == 0):
        print("ALGO DEU ERRADO. O VALOR DE T NÃO FOI ENCONTRADO NA TABELA.")
        quit()

    print("   t =", sin, t)
    print("\n Estaística do teste:")
    tc = (x1-x2 - u0) / a
    print("   tc = ", tc)
    
    if(abs(tc) < t):
        print("\n\n NÃO REJEIITA H0")
        print(f"Não há evidências a {s}% de significância de que ", end = "")
    else:
        print("\n\n REJEIITA H0")
        print(f"Há evidências a {s}% de significância de que ", end = "")
    if(l == 0):#bilateral
        print("exista diferença na média das duas amostras.")
    else:
        print("a média da amostra ", end = "")
        if(x1 > x2):
            print("1", end = "")
        else:
            print("2", end = "")
        print(" é maior que a média da amostra ")
        if(x1 > x2):
            print("2", end = "")
        else:
            print("1", end = "")
        print(".")




if __name__ == '__main__':
    inicio()