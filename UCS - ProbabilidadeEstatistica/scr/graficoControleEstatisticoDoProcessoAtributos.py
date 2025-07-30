# By: will.i.am | Harmonia - RS - Brasil
# 2021.11.20
try:
    import os
    from os import path
    import multiplat as mp
    import backend as be
    from math import sqrt
except:
    print("Biblioteca necessária não disponível.\n\nEstamos finalizando.")
    quit()

try:
    import matplotlib.pyplot as pyplot
except:
    mp.install_lib("matplotlib")
    mp.restart_program()

def inicio():

    mp.limpar_terminal()
    print(' By: will.i.am        ->      github.com/williampilger\n\n\n  ')
    print(" > Gráfico de Controle Estatístico do Processo para Atributos <")
    print(" >             Gráfico para FRAÇÃO NÃO-CONFORME               <")

    n = int(input("Informe a quantidade de elementos por amostra: "))
    print(f"\n\n Digite abaixo a quantidade de itens NÃO-CONFORME de cada amostra de {n} elementos.\nDigite -1 para parar a coleta de amostras.\n")
    
    amostras = []#quantidades de não-conforme por amostra
    pls = []#proporções de não-conformidade (0 a 1)
    cont = 0
    while True:
        val = int(input(f"Não-conformidades da amostra {cont + 1}: "))
        if(val < 0):
            break
        amostras.append(val)
        pls.append(val/n)
        cont += 1
    pl = sum(pls) / cont #proporção média

    LSC = min( 1, pl + 3 * sqrt( (pl * (1-pl) ) / n ) ) #pode ser no maximo 1, pois não tem como ser além de 100%
    LC = pl
    LIC = max( 0, pl - 3 * sqrt( (pl * (1-pl) ) / n ) ) #nínimo zero, pois é impossível que seja menos de 0%
    
    print("############################################ Resultados ############################################")
    print(f"\n    pl: {pl}")
    print(f"\nLimites de controle para gráfico da gração de não-conforme")
    print(f"    LSC = {LSC}")
    print(f"    LC = {LC}")
    print(f"    LIC = {LIC}")


    vet = []#vetor com número dos grupos (identificação apenas)
    vet_LSC = []#Vetor de limites superiores
    vet_LC = []#vetor com médias
    vet_LIC = []#vetor com limites máximos
    for i in range(cont):
        vet.append(i+1)
        vet_LSC.append(LSC)#só repete os valores
        vet_LC.append(LC)
        vet_LIC.append(LIC)
    

    falha = False
    #Verificando valores
    for i in range(cont):#pra cada valor do gráfico
        if(pls[i] > vet_LSC[i] or pls[i] < vet_LIC[i]):
            falha = True
    

    print("\n############################################ Conclusões ############################################\n")
    if(falha):
        print(f"No mínimo um dos valores ultrapassou os limites calculados.")
    else:
        print(f"Todas as proporções estão dentro dos limites calculados.")


    #PLOT Gráfico
    fig, axs = pyplot.subplots()#(2, sharex=True, sharey=True)
    fig.suptitle('Gráficos de X e R, respectivamente')
    #print(vet, medias)
    axs.plot(vet, pls)
    axs.plot(vet, vet_LSC, color = 'k', linestyle='dashed')
    axs.plot(vet, vet_LC, color = 'k')
    axs.plot(vet, vet_LIC, color = 'k', linestyle='dashed')
    pyplot.show()#exibe o gráfico

if __name__ == '__main__':
    inicio()
    input()