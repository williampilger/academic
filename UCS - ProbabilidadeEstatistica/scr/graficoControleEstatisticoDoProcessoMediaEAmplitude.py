# By: will.i.am | Bom Princípio - RS - Brasil
# 2021.11.16
try:
    import os
    from os import path
    import multiplat as mp
    import backend as be
    from datatabs.CEP import A2, D2, D3, D4
except:
    print("Biblioteca necessária não disponível.\n\nEstamos finalizando.")
    quit()

try:
    import matplotlib.pyplot as pl
except:
    mp.install_lib("matplotlib")
    mp.restart_program()

def le_dados(fileName):
    file = open(fileName, "rt")
    medias = []
    amplitudes = []
    ns = []
    for linha in file:
        linha = linha.split(sep='\t')
        sum = 0
        cont = 0
        for numero in linha:
            val = float(numero.replace(',','.'))#caso use ',' troca
            if(cont == 0):
                max = min = val
            elif(val > max):
                max = val
            elif(val < min):
                min = val
            sum += val
            cont += 1
        amplitudes.append(max - min)
        medias.append(sum/cont)
        ns.append(cont)
    return medias, amplitudes, ns




def inicio():

    mp.limpar_terminal()
    print(' By: will.i.am        ->      github.com/williampilger\n\n\n  ')
    print(" > Gráfico baseado nas média e amplitude para Controle Estatístico do Processo <")

    print("Facilitando a entrada de dados para esta aplicação, os dados das amostras devem ser preenchidos em um arquivo.")
    print("E para tal, cada LINHA corresponderá à uma amostra, e os valores deverão ser separados por TABS.")
    print("""Como no exemplo abaixo:
            2   6   9   9   6
            6   5   8   6   8
            2   3   6.6 58  95.658
    """)
    fileName = input("Informe o nome do aquiro com os dados: ")
    if(not os.path.isfile(fileName)):
        print("O arquivo informado não existe!")
        be.sair(2)
    medias, amplitudes, ns = le_dados(fileName)

    n = ns[0] #estou adotando o número de amostras do primeiro grupo como padrão

    if(n > 25):
        print("Não está preparado para amostras maiores que 25")
        be.sair(0)

    cont = 0
    sum = 0
    for media in medias:
        sum += media
        cont += 1
    X = sum / cont

    cont = 0
    sum = 0
    for amplitude in amplitudes:
        sum += amplitude
        cont += 1
    R = sum / cont

    # Limites de controle para gráfico X
    LSC_X = X + A2[n] * R
    LC_X = X
    LIC_X = X - A2[n] * R

    # Limites de controle para gráfico R
    LSC_R = D4[n] * R
    LC_R = R
    LIC_R = D3[n] * R 

    

    print("############################################ Resultados ############################################")
    print(f"\n    Médias: {medias}")
    print(f"    Amplitudes: {amplitudes}")
    print(f"    X = {X}")
    print(f"    R = {R}")
    print(f"\nLimites de controle para gráfico das médias (X)")
    print(f"    A2 para n={n} : {A2[n]}")
    print(f"    LSC = {LSC_X}")
    print(f"    LC = {LC_X}")
    print(f"    LIC = {LIC_X}")
    print(f"\nLimites de controle para gráfico das amplitudes (R)")
    print(f"    D4 para n={n} : {D4[n]}")
    print(f"    D3 para n={n} : {D3[n]}")
    print(f"    LSC = {LSC_R}")
    print(f"    LC = {LC_R}")
    print(f"    LIC = {LIC_R}")


    vet = []#vetor com número dos grupos (identificação apenas)
    vet_LSC_X = []#Vetor de limites superiores
    vet_LC_X = []#vetor com médias
    vet_LIC_X = []#vetor com limites máximos
    for i in range(1, len(medias)+1):
        vet.append(i)
        if(ns[i-1] == n):#se o número de amostras for igual ao padrão (quase sempre)
            vet_LSC_X.append(LSC_X)#só repete os valores
            vet_LC_X.append(LC_X)
            vet_LIC_X.append(LIC_X)
        else:#só chega aqui se o número de amostras é diferente do padrão
            vet_LSC_X.append( X + A2[ns[i-1]] * ( D2[ns[i-1]] / D2[n] ) * R )
            vet_LC_X.append( X )#não muda
            vet_LIC_X.append( X - A2[ns[i-1]] * ( D2[ns[i-1]] / D2[n] ) * R )
    
    vet_LSC_R = []
    vet_LC_R = []
    vet_LIC_R = []
    for i in range(1, len(amplitudes)+1):
        if(ns[i-1] == n):#se o número de amostras for igual ao padrão (quase sempre)
            vet_LSC_R.append(LSC_R)#só repete os valores
            vet_LC_R.append(LC_R)
            vet_LIC_R.append(LIC_R)
        else:#só chega aqui se o número de amostras é diferente do padrão
            vet_LSC_R.append( D4[ns[i-1]] * ( D2[ns[i-1]] / D2[n] ) * R )
            vet_LC_R.append( ( D2[ns[i-1]] / D2[n] ) * R )
            vet_LIC_R.append( D3[ns[i-1]] * ( D2[ns[i-1]] / D2[n] ) * R )#Aqui falta algo

    falha_media = False
    falha_amplitude = False
    #Verificando valores
    for i in range(len(vet)):#pra cada valor do gráfico
        if(medias[i] > vet_LSC_X[i] or medias[i] < vet_LIC_X[i]):
            falha_media = True
        if(amplitudes[i] > vet_LSC_R[i] or amplitudes[i] < vet_LIC_R[i]):
            falha_amplitude = True

    print("\n############################################ Conclusões ############################################\n")
    if(falha_media):
        print(f"Os valores das médias ultrapassaram os limites calculados.")
    else:
        print(f"As médias estão dentro dos limites.")
    if(falha_amplitude):
        print(f"Os valores das amplitudes ultrapassaram os limites calculados.")
    else:
        print(f"As amplitudes estão dentro dos limites.")
    if(falha_media or falha_amplitude):
        print("portanto, precisa-se remover a(s) amostra(s) que ultrapassa(m) o padrão, e refazer o cálculo.")


    #PLOT Gráfico
    fig, axs = pl.subplots(2)#(2, sharex=True, sharey=True)
    fig.suptitle('Gráficos de X e R, respectivamente')
    #print(vet, medias)
    axs[0].plot(vet, medias)
    axs[0].plot(vet, vet_LSC_X, color = 'k', linestyle='dashed')
    axs[0].plot(vet, vet_LC_X, color = 'k')
    axs[0].plot(vet, vet_LIC_X, color = 'k', linestyle='dashed')
    axs[1].plot(vet, amplitudes)
    axs[1].plot(vet, vet_LSC_R, color = 'k', linestyle='dashed')
    axs[1].plot(vet, vet_LC_R, color = 'k')
    axs[1].plot(vet, vet_LIC_R, color = 'k', linestyle='dashed')
    pl.show()#exibe o gráfico

if __name__ == '__main__':
    inicio()
    input()