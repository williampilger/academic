import random

def jogar():
    mensagem_boas_vindas()
    palavra = carrega_palavra_secreta()
    acertou = forca(palavra, 7) #chama o jogo em sí. Com 5 tentativasde chute
    if(acertou):
        mensagem_vitória(palavra)
    else:
        mensagem_derrota(palavra)
    print("Fim de jogo!")

def carrega_palavra_secreta():
    palavras = []
    with open("palavras.txt",
              "r") as arquivo:  # isso abre o arquivo somente pelo tempo que está "dentro" da função. Não é necessário fechar
        for linha in arquivo:
            palavras.append(arquivo.readline().strip().upper())

    return palavras[random.randrange(1, len(palavras))]

def forca(palavra, limite_erros):
    #função recebe a palavra e o número de tentativas, e retorna um bool True se acertou ou False se perdeu
    acertos = ["_" for letra in
               palavra]  # preenche a scring acertos com "_" um para cada letra da nossa palavra secreta.
    enforcou = False
    acertou = False
    erros = 0
    while (not enforcou and not acertou):
        desenha_forca(erros)
        print(acertos)
        chute = input("Digite uma letra({} erros de {}): ".format(erros, limite_erros)).upper().strip()
        index = 0  # armazena a posição da string em que existe a letra
        existe = False
        for letra in palavra:
            if (chute == letra):
                acertos[index] = chute
                existe = True
            index += 1
        if (not existe):
            erros += 1
        enforcou = erros >= limite_erros  # se esgotou os erros, vai sair do while
        acertou = not "_" in acertos  # se acertou tudo sai do jogo
    return acertou

def mensagem_boas_vindas():
    print("Bem vindo ao jogo da forca!")

def mensagem_derrota(palavra):
    print("Puxa, você foi enforcado!")
    print("A palavra era {}".format(palavra))
    print("    _______________         ")
    print("   /               \       ")
    print("  /                 \      ")
    print("//                   \/\  ")
    print("\|   XXXX     XXXX   | /   ")
    print(" |   XXXX     XXXX   |/     ")
    print(" |   XXX       XXX   |      ")
    print(" |                   |      ")
    print(" \__      XXX      __/     ")
    print("   |\     XXX     /|       ")
    print("   | |           | |        ")
    print("   | I I I I I I I |        ")
    print("   |  I I I I I I  |        ")
    print("   \_             _/       ")
    print("     \_         _/         ")
    print("       \_______/           ")

def mensagem_vitória(palavra):
    print("Parabéns, você ganhou!")
    print("A palavra secreta era:", palavra)
    print("       ___________      ")
    print("      '._==_==_=_.'     ")
    print("      .-\\:      /-.    ")
    print("     | (|:.     |) |    ")
    print("      '-|:.     |-'     ")
    print("        \\::.    /      ")
    print("         '::. .'        ")
    print("           ) (          ")
    print("         _.' '._        ")
    print("        '-------'       ")

def desenha_forca(erros):
    print("  _______     ")
    print(" |/      |    ")

    if(erros == 1):
        print(" |      (_)   ")
        print(" |            ")
        print(" |            ")
        print(" |            ")

    if(erros == 2):
        print(" |      (_)   ")
        print(" |      \     ")
        print(" |            ")
        print(" |            ")

    if(erros == 3):
        print(" |      (_)   ")
        print(" |      \|    ")
        print(" |            ")
        print(" |            ")

    if(erros == 4):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |            ")
        print(" |            ")

    if(erros == 5):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |            ")

    if(erros == 6):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |      /     ")

    if (erros == 7):
        print(" |      (_)   ")
        print(" |      \|/   ")
        print(" |       |    ")
        print(" |      / \   ")

    print(" |            ")
    print("_|___         ")

if(__name__ == "__main__"):
    jogar()
