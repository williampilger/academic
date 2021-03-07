def jogar():
    print("Bem vindo ao jogo da forca!")
    palavra = "banana".upper()
    acertos = ["_" for letra in palavra]
    enforcou = False
    acertou = False
    limite_erros = 5 #número de erros permitido
    erros = 0
    while(not enforcou and not acertou):
        print(acertos)
        chute = input("Digite uma letra({} erros de {}): ".format(erros, limite_erros)).upper().strip()
        index = 0 #armazena a posição da string em que existe a letra
        existe = False
        for letra in palavra:
            if(chute == letra):
                acertos[index] = chute
                existe = True
            index += 1
        if(not existe):
            erros += 1
        enforcou = erros >= limite_erros #se esgotou os erros, vai sair do while
        acertou = not "_" in acertos # se acertou tudo sai do jogo
    if(acertou):
        print("Parabéns!!")
    else:
        print("Não foi desta vez.")
    print("A palavra era:", palavra)
    print("Fim de jogo!")


if(__name__ == "__main__"):
    jogar()