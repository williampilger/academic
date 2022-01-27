# By: will.i.am | Bom Princípio - RS - Brasil
# 2021.11.12
try:
    import os
    from os import path
    import multiplat as mp
    import backend as be
except:
    print("Biblioteca necessária não disponível.\n\nEstamos finalizando.")
    quit()

def get_F(v1, v2, significancia):
    fileName = mp.dirConvert("datatabs/distribuicao_f_0")
    if(significancia == 0.5):
        fileName += "05"
    elif(significancia == 1):
        fileName += "10"
    elif(significancia == 2.5):
        fileName += "25"
    elif(significancia == 5):
        fileName += "50"
    else:
        print("Apenas as significancias abaixo estão disponíveis:")
        print("   0.5")
        print("   1")
        print("   2.5")
        print("   5")
        be.sair(1)
    try:
        arquivo = open(fileName, "rt")
    except:
        print(f"O arquivo \"{fileName}\" não foi encontrado")
        be.sair(4)
    
    ok = False
    i = -1
    for linha in arquivo:
        i += 1
        if(i == 0):
            continue
        colunas = linha.split('\t')
        if(i == 1):#tá na linha pra buscar o V1
            j = 0
            for valor in colunas:
                try:
                    if(int(valor) == v1):
                        ok = True
                        break
                except:
                    pass
                j += 1
            if(not ok):# se não achou V1, nem precisa seguir
                break
        else:
            try:
                if(int(colunas[0]) == v2):
                    return float(colunas[j])
                    break
                elif(int(colunas[0]) > v2):
                    return anterior
                else:
                    anterior = float(colunas[j])
            except:
                pass
                
    return False

            




def inicio():
    mp.limpar_terminal()
    print(' By: will.i.am        ->      github.com/williampilger\n\n\n  ')
    print(" > TESTE DE HIPÓTESES PARA VARIÂNCIAS (ANOVA) <")
    print("\n Para analizar variâncias de duas ou mais amostras da mesma população.\n")

    print("Facilitando a entrada de dados para esta aplicação, os dados das amostras devem ser preenchidos em um arquivo.")
    print("E para tal, cada LINHA corresponderá à uma amostra, e os valores deverão ser separados por TABS.")
    print("""Como no exemplo abaixo:
            2   6   9
            6   5   8   6   8
            2   3
    """)
    fileName = input("Informe o nome do aquiro com os dados: ")
    if(not os.path.isfile(fileName)):
        print("O arquivo informado não existe!")
        be.sair(2)
    
    significancia = float(input("Informe o PERCENTUAL de significância que deseja adotar: "))
    
    amostras = []
    medias = []
    total_amostras = 0
    total_soma = 0
    fluxo = open(fileName, "rt")
    for linha in fluxo:
        linha = linha.split(sep='\t')
        amostra = []
        soma = 0
        contagem = 0
        for valor in linha:
            valor = float(valor.replace(',', '.'))
            contagem += 1
            soma += valor
            amostra.append(valor)
        amostras.append(amostra)
        medias.append(soma/contagem)
        total_amostras += contagem
        total_soma += soma
    total_media = total_soma/total_amostras

    k = len(amostras)
    
    #SQT -> Soma de quadrados total
    SQT = 0
    for amostra in amostras:
        for valor in amostra:
            SQT += (valor - total_media) ** 2
    
    #SQE -> Soma de quadrados das diferenças entre grupos
    SQE = 0
    for i in range(k):
        SQE += len(amostras[i]) * ((medias[i] - total_media) ** 2)

    #SQR -> Soma de quadrados residual (ou das diferenças entre grupos)
    SQR = 0
    for i in range(k):
        for valor in amostras[i]:
            SQR += (valor - medias[i]) ** 2
    
    #QME -> Quadrado médio da diferença entre grupos
    QME = SQE / (k - 1)

    #QMR -> Quadrado médio residual (ou das diferenças dentro dos grupos)
    QMR = SQR / (total_amostras - k)

    fc = QME / QMR

    v1 = k - 1
    v2 = total_amostras - k

    f = get_F(v1, v2, significancia)

    
    mp.limpar_terminal()

    print(f"+------------------+------------------+-------------------------------+-------------------------------+-------------------------------+")
    print(f"|Fonte de variação | Graus de liberd. |              SQ               |               QM              |        Estatística teste      |")
    print(f"+------------------+------------------+-------------------------------+-------------------------------+-------------------------------+")
    print(f"|   Entre grupos   |      {str(k-1).ljust(6)}      |    {str(SQE)[:22].ljust(22)}     |     {str(QME)[:22].ljust(22)}    |                               |")
    print(f"+------------------+------------------+-------------------------------+-------------------------------+     {str(fc)[:22].ljust(22)}    |")
    print(f"|Dentro dos grupos |      {str(total_amostras-k).ljust(6)}      |    {str(SQR)[:22].ljust(22)}     |     {str(QMR)[:22].ljust(22)}    |                               |")
    print(f"+------------------+------------------+-------------------------------+-------------------------------+-------------------------------+")
    print(f"|      TOTAL       |      {str(total_amostras-k).ljust(6)}      |    {str(SQT)[:22].ljust(22)}     |               ~               |                ~              |")
    print(f"+------------------+------------------+-------------------------------+-------------------------------+-------------------------------+")

    print("\n------------------------------------------ RESULTADOS -----------------------------------------")
    print(f"Média Geral = {total_media}")
    print(f"Tamanho da amostra total = {total_amostras}")
    print(f"Somatória das amostras = {total_soma}")
    print(f"Médias por grupo:")
    i = 1
    for media in medias:
        print(f"    Grupo {i} = {media}")
        i += 1
    print(f"Tamanho das amostras por grupo:")
    i = 1
    for amostra in amostras:
        print(f"    Grupo {i} = {len(amostra)}")
        i += 1
    print(f"k = {k}")
    print(f"SQT = {SQT}")
    print(f"SQE = {SQE}")
    print(f"SQR = {SQR}")
    print(f"QME = {QME}")
    print(f"QMR = {QMR}")
    print(f"F = {f}  (para significancia de {significancia}%, v1 = {v1} e v2 = {v2})")

    print("\n- - - - - - - - - - - - - - - - - - - ESTATISTICA DO TESTE - - - - - - - - - - - - - - - - - -")
    print(f"Fc = {fc}")

    print("\n- - - - - - - - - - - - - - - - - - - - - - CONCLUSÃO - - - - - - - - - - - - - - - - - - - - -")
    rejeita = f<fc
    print(f" Como Fc ", end='')
    if(rejeita):
        print(f"é", end='')
    else:
        print("não é", end='')
    print(f" maior que F, ", end='')
    if(not rejeita):
        print("NÃO ", end='')
    print(f"REJEITA-SE H0.")
    print(f"\nPortanto, concluimos que, com {significancia}% de significancia,")
    if(not rejeita):
        print("não", end='')
    print(f" há evidências de que haja diferença entre as médias.\n\n")


if __name__ == '__main__':
    inicio()