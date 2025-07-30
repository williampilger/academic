# By: will.i.am | Bom Princípio - RS - Brasil
# 2021.10.27
try:
    import os
    from os import path
    import multiplat as mp
    import backend as be
except:
    print("Biblioteca necessária não disponível.\n\nEstamos finalizando.")
    quit()

def inicio():
    mp.limpar_terminal()
    print(' By: will.i.am        ->      github.com/williampilger\n\n\n  ')
    #print('1  - MÉDIA ARITMÉTICA')
    #print('2  - MÉDIA ARITMÉTICA PONDERADA')
    #print('3  - MEDIANA')
    #print('4  - MODA')
    #print('5  - VARIÂNCIA')
    #print('6  - DESVIO PADRÃO')
    #print('7  - COEFICIENTE DE VARIAÇÃO')
    #print('8  - COEFICIENTE DE ASSIMETRIA DE PEARSON')
    #print('9  - ESPERANÇA (OU EXPECTÂNCIA)')
    #print('10 - DESVIO PADRÃO')
    #print('11 - DISTRIBUIÇÃO BINOMIAL')
    #print('12 - DISTRIBUIÇÃO DE POISSON')
    #print('13 - DISTRIBUIÇÃO HIPERGEOMÉTRICA')
    #print('14 - DISTRIBUIÇÃO EXPONENCIAL')
    #print('15 - DISTRIBUIÇÃO NORMAL')
    #print('16 - INTERVALO DE CONFIANÇA PARA A MÉDIA')
    #print('17 - INTERVALO DE CONFIANÇA PARA A PROPORÇÃO')
    #print('18 - DIMENSIONAMENTO DA AMOSTRA PARA ESTIMAÇÃO DA MÉDIA')
    #print('19 - DIMENSIONAMENTO DA AMOSTRA PARA ESTIMAÇÃO DA PROPORÇÃO')
    print('20 - TESTE DE HIPÓTESES PARA UMA MÉDIA')
    #print('21 - TESTE DE HIPÓTESES PARA UMA PROPORÇÃO')
    print('22 - TESTE DE HIPÓTESES PARA DIFERENÇA DE PROPORÇÕES')
    print('23 - TESTE DE HIPÓTESES PARA COMPARAÇÃO DE VARIÂNCIAS (ANOVA)')
    print('24 - TESTE DE HIPÓTESES PARA DIFERENÇA DE MÉDIAS')
    print('25 - TESTE DE HIPÓTESES PARA COMPARAÇÃO DE VARIÂNCIAS COM DOIS FATORES')
    print('26 - GRÁFICO CONTROLE DE PROCESSO - POR MÉDIA E AMPLITUDE')
    print('27 - GRÁFICO CONTROLE DE PROCESSO - POR ATRIBUTOS')
    print('28 - ÍNDICES DE CAPACIDADE (CP E CPK)')
    
    opcao = int(input('Informe sua opcao: '))
    if(opcao == 0):
        quit()
    elif(opcao == 20):
        import testeHipoteseMedia as st
        st.inicio()
    elif(opcao == 22):
        import testeHipoteseDiferencaProporcoes as st
        st.inicio()
    elif(opcao == 23):
        import testeHipoteseVariancia as st
        st.inicio()
    elif(opcao == 24):
        import testeHipoteseDiferencaMedias as st
        st.inicio()
    elif(opcao == 25):
        import testeHipoteseVarianciaDoisFatores as st
        st.inicio()
    elif(opcao == 26):
        import graficoControleEstatisticoDoProcessoMediaEAmplitude as st
        st.inicio()
    elif(opcao == 27):
        import graficoControleEstatisticoDoProcessoAtributos as st
        st.inicio()
    elif(opcao == 28):
        import indicesDeCapacidade as st
        st.inicio()
        

if __name__ == '__main__':
    inicio()
    input("\n\n\nPressione ENTER para sair.")
