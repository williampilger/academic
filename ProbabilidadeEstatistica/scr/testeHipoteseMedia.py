# By: will.i.am | Bom Princípio - RS - Brasil
# 2021.10.31
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
    print(" > TESTE DE HIPÓTESES PARA UMA MÉDIA <")
    print("\n Para testar hipóteses para rejeitar uma média.\n")

    N = int(input("   Tamanho da população ( 0 se infinito ou desconhecido): "))
    
    n = int(input("   Tamanho da amostra (n): "))
    gl = n - 1 #graus de liberdade
    
    xl = float(input("   Média Amostral (xl): ").replace(",","."))
    
    s = float(input("   Desvio Padrão (s): ").replace(",","."))
    
    u0 = float(input("   Valor da média a ser testado (u0): ").replace(",","."))
    
    a = float(input("   Nível de significância [percentual 0.05 - 10.00] (a): ").replace(",","."))

    l = input("\n Teste Unilateral ou Bilateral? (U/B): ")
    sin = "+"
    if(xl<u0):
        sin = "-"
    if(l == "U" or l == "u"):
        l = 32 #indice da última linha da tabela de distribuição t
    elif(l == "B" or l == "b"):
        l = 0 # indice da primeira linha da tabela de distribuição t
        sin = "+-"
    else:
        print("ALGO DEU ERRADO. LATERALIDADE INFORMADA NÃO É VÁLIDA.")
        quit()


    print("\n\n ## RESULTADOS ##")
    
    print(f"\n t - Da tabela de distribuição t, para {a}% de significancia e {gl} graus de liberdade:")
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
            if(item == a):
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
    if(N > 0):# N conhecido e finito
        ox = (s / sqrt(n)) * sqrt((N-n)/(N-1))
    else:
        ox = s / sqrt(n)
    tc = (xl - u0) / ox
    print("   tc = ", tc)
    
    if(abs(tc) < t):
        print("\n\n NÃO REJEIITA H0")
        print(f"Não há evidências a {a}% de significância de que ", end = "")
    else:
        print("\n\n REJEIITA H0")
        print(f"Há evidências a {a}% de significância de que ", end = "")
    if(l == 0):#bilateral
        print(f"seja diferente de {u0}.")
    else:
        print("a média seja ", end = "")
        if(xl > u0):
            print("maior", end = "")
        else:
            print("menor", end = "")
        print(f" que {u0}.")



if __name__ == '__main__':
    inicio()