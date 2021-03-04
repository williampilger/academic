print("Este é um jogo de adivinhação!")

numero = 56
tentativas = 3

for rodada in range(1, tentativas + 1):
    if(rodada == 1):
        print("Faça sua aposta", end="")
    else:
        print("Tente novamente", end="")
    print("(tentativa {} de {}): ".format(rodada, tentativas), end="")
    chute = int(input(""))

    if(chute == numero):
        print("Mas aah, você acertou!!")
        break
    else:
        erro = abs(numero - chute)
        if(rodada == 1):
            print("Noop. O número secreto é", end=" ")
            if(chute > numero):
                print("menor!")
            else:
                print("maior!")
        elif(rodada < tentativas):
            print("Ainda não.", end=" ")
            if(erro < erro_anterior):
                print("Mas você está mais perto!")
            elif(erro > erro_anterior):
                print("Está esfriando...")
        else:
            print("Eh, infelizmente não foi dessa vez.\nO número secreto era", numero)
        erro_anterior = erro



print("Fim de jogo!")
