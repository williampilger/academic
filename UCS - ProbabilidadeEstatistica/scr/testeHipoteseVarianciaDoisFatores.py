# By: will.i.am | Harmonia- RS - Brasil
# 2021.11.13
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
            except:
                pass
                
    return False

            




def inicio():
    mp.limpar_terminal()
    print(' By: will.i.am        ->      github.com/williampilger\n\n\n  ')
    print(" > TESTE DE HIPÓTESES PARA VARIÂNCIAS COM DOIS FATORES (ANOVA) <")
    print("\n Para analizar variâncias de duas ou mais amostras da mesma população\n com base em dois fatores.\n")
    print("\n 1 - Preciso do cálculo completo")
    print(" 2 - Tenho os dados SQE1, SQE2, SQR, SQT, k e l")
    opcao = int(input("Digite sua opção: "))
    if(opcao == 1):
        
        be.sair(0)

    elif(opcao == 2):
        mp.limpar_terminal()
        SQE1 = float(input(" Informe SQE1: ").replace(",","."))
        SQE2 = float(input(" Informe SQE2: ").replace(",","."))
        SQR = float(input(" Informe SQR: ").replace(",","."))
        try:
            SQT = float(input(" Informe SQT: ").replace(",","."))
        except:
            SQT = SQE1 + SQE2 + SQR
        k = int(input(" Informe k: "))
        l = int(input(" Informe l: "))
        total_amostras = k * l
    else:
        print("Opção inválida!")
        be.sair(2)
    
    
    significancia = float(input("Informe o PERCENTUAL de significância que deseja adotar: "))

    #QME -> Quadrado médio da diferença entre grupos
    QME1 = SQE1 / (k - 1)
    QME2 = SQE2 / (l - 1)

    #QMR -> Quadrado médio residual (ou das diferenças dentro dos grupos)
    QMR = SQR / ((k - 1) * (l - 1))

    fc1 = QME1 / QMR
    fc2 = QME2 / QMR

    v1_1 = k - 1
    v1_2 = l - 1
    v2 = (k - 1) * (l - 1)

    f1 = get_F(v1_1, v2, significancia)
    f2 = get_F(v1_2, v2, significancia)

    print(f"+------------------+------------------+------------------+------------------+------------------+")
    print(f"|Fonte de variação | Graus de liberd. |        SQ        |         QM       | Estatística teste|")
    print(f"+------------------+------------------+------------------+------------------+------------------+")
    print(f"| Entre grupos (F1)|      {str(k-1).ljust(6)}      |    {str(SQE1)[:9].ljust(9)}     |     {str(QME1)[:9].ljust(9)}    | fc1 = {str(fc1)[:9].ljust(9)}  |")
    print(f"+------------------+------------------+------------------+------------------+                  +")
    print(f"| Entre grupos (F2)|      {str(l-1).ljust(6)}      |    {str(SQE2)[:9].ljust(9)}     |     {str(QME2)[:9].ljust(9)}    | fc2 = {str(fc2)[:9].ljust(9)}  |")
    print(f"+------------------+------------------+------------------+------------------+                  |")
    print(f"|Dentro dos grupos |      {str(v2).ljust(6)}      |    {str(SQR)[:9].ljust(9)}     |     {str(QMR)[:9].ljust(9)}    |                  |")
    print(f"+------------------+------------------+------------------+------------------+------------------+")
    print(f"|      TOTAL       |      {str(total_amostras-1).ljust(6)}      |    {str(SQT)[:9].ljust(9)}     |        ~         |         ~        |")
    print(f"+------------------+------------------+------------------+------------------+------------------+")

    print("\n------------------------------------------ RESULTADOS -----------------------------------------")

    print(f"QME = {QME1}")
    print(f"QMR = {QMR}")

    print(f"\nF1 = {f1}  (para significancia de {significancia}%, v1 = {v1_1} e v2 = {v2})")
    print(f"F1 = {f2}  (para significancia de {significancia}%, v1 = {v1_2} e v2 = {v2})")

    print("\n- - - - - - - - - - - - - - - - - - - ESTATISTICA DO TESTE - - - - - - - - - - - - - - - - - -")
    print(f"Fc1 = {fc1}")
    print(f"Fc2 = {fc2}")

    print("\n- - - - - - - - - - - - - - - - - - - - - - CONCLUSÃO - - - - - - - - - - - - - - - - - - - - -")
    rejeita_1 = f1<fc1
    rejeita_2 = f2<fc2
    
    print(f"Fator 1:\n Como Fc ", end='')
    if(rejeita_1):
        print(f"é", end='')
    else:
        print("não é", end='')
    print(f" maior que F, ", end='')
    if(not rejeita_1):
        print("NÃO ", end='')
    print(f"REJEITA-SE H0.")
    print(f"\nPortanto, concluimos que, com {significancia}% de significancia,")
    if(not rejeita_1):
        print("não", end='')
    print(f" há evidências de que haja diferença entre as médias.\n\n")


    print(f"Fator 2:\n Como Fc ", end='')
    if(rejeita_2):
        print(f"é", end='')
    else:
        print("não é", end='')
    print(f" maior que F, ", end='')
    if(not rejeita_2):
        print("NÃO ", end='')
    print(f"REJEITA-SE H0.")
    print(f"\nPortanto, concluimos que, com {significancia}% de significancia,")
    if(not rejeita_2):
        print("não", end='')
    print(f" há evidências de que haja diferença entre as médias.\n\n")


if __name__ == '__main__':
    inicio()