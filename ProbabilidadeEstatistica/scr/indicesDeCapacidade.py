# By: will.i.am | Harmonia - RS - Brasil
# 2021.11.20

try:
    import os
    from os import path
    import multiplat as mp
    import backend as be
    import math
    from datatabs.CEP import d2
except:
    print("Biblioteca necessária não disponível.\n\nEstamos finalizando.")
    quit()



def inicio():

    mp.limpar_terminal()
    print(' By: will.i.am        ->      github.com/williampilger\n\n\n  ')
    print(" >         Índices de Capacidade         <")

    n = int(input("Informe o número de unidades por amostra: "))
    LSE = float(input("Informe o limite superior de especificação (LSE): ").replace(',','.'))
    LIE = float(input("Informe o limite inferior de especificação (LIE): ").replace(',','.'))
    Xl = float(input("Informe a média das médias (Xl): ").replace(',','.'))
    Rl = float(input("Informe a amplitude média (Rl): ").replace(',','.'))
    
    o = Rl / d2[n] #estimativa de desvio

    Cp = (LSE - LIE) / ( 6 * o)

    Cps = (LSE - Xl) / ( 3 * o)
    Cpi = (Xl - LIE) / ( 3 * o)
    Cpk = min(Cps, Cpi)

    print("############################################ Resultados ############################################")
    print(f"\n    Cp = {Cp}")
    print(f"\n    Cpk = {Cpk}")
    




if __name__ == '__main__':
    inicio()
    input()