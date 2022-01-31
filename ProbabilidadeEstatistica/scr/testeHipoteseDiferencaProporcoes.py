# By: will.i.am | Bom Princípio - RS - Brasil
# 2021.10.27
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
    print(" > TESTE DE HIPÓTESES PARA DIFERENÇA DE PROPORÇÕES <")
    print("\n Para testar hipóteses relacionadas à comparação entre duas proporções populacionais.\n")

    print("\n DADOS AMOSTRAIS (AMOSTRA 1)")
    n1 = int(input("   Tamanho da amostra (n1): "))
    n1H = int(input("   Número de elementos da amostra com a característica (n1*): "))
    p1 = n1H/n1
    print("   Proporção para amostra (p1) =", p1, "  <- CALCULADO")

    print("\n DADOS AMOSTRAIS (AMOSTRA 2)")
    n2 = int(input("   Tamanho da amostra (n2): "))
    n2H = int(input("   Número de elementos da amostra com a característica (n2*): "))
    p2 = n2H/n2
    print("   Proporção para amostra (p2) =", p2, "  <- CALCULADO")

    pc = (n1*p1+n2*p2)/(n1+n2)
    print("\n Proporção conjunta =", pc, "  <- CALCULADO")

    ddp = sqrt(pc*(1-pc)*(1/n1+1/n2))
    print("\n Desvio das diferenças de proporções =", pc, "  <- CALCULADO")

    s = float(input("\n Nível de significância [percentual 0.05 - 10.00] (a): "))

    l = input("\n Teste Unilateral ou Bilateral? (U/B): ")

    print("\n\n ## RESULTADOS ##")
    
    print("\n ESTATÍSTICA DO TESTE")
    Zc = (p1 - p2) / ddp
    print("   Zc =", Zc, "  <- CALCULADO")

    print(f"\n Z - Da tabela de distribuição normal, para {s}% de significancia e INFINITOS graus de liberdade:")
    tb_t = []
    with open("datatabs/distribuicao_t", "rt") as arquivo:
        for linha in arquivo:
            tb_t.append(linha.replace("\n", "").split("\t"))
    
    sin = "+"
    if(l == "U" or l == "u"):
        l = len(tb_t)-1
        if(Zc < 0):
            sin = "-"
    elif(l == "B" or l == "b"):
        l = 0
        sin = "+-"
    else:
        print("ALGO DEU ERRADO. LATERALIDADE INFORMADA NÃO É VÁLIDA.")
        quit()

    Z = 0
    i = 0
    for item in tb_t[l]:#pega ultima linha da tabela
        try:
            item = float(item)
            if(item == s):
                Z = float(tb_t[len(tb_t)-2][i])
                break
        except:
            pass
        i += 1

    if(Z == 0):
        print("ALGO DEU ERRADO. A SIGNIFICÂNCIA INFORMADA NÃO FOI ENCONTRADA.")
        quit()

    print("   Z =", sin, Z)
    
    if(abs(Zc) < Z):
        print("\n\n NÃO REJEIITA H0")
        print(f"Não há evidências a {s}% de significância...")
    else:
        print("\n\n REJEIITA H0")
        print(f"Há evidências a {s}% de significância...")




if __name__ == '__main__':
    inicio()