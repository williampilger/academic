import random
print("Este é um jogo de adivinhação!")

numero = random.rangrange(1,101)

nivel = 0
print("(1) Fácil\n(2) Médio\n(3) Difícil")
while(nivel < 1 or nivel > 3):
    nivel = input("Escolha seu nível")
if(nivel == 1):
    tentativas = 20
elif(nivel == 2):
    tentativa = 10
else:
    tentativas = 5

pontos = 1000
    
for rodada in range(1, tentativas + 1):
    if(rodada == 1):
        print("Faça sua aposta", end="")
    else:
        print("Tente novamente", end="")
    print("Digite um número entre 1 e 100 (tentativa {} de {}): ".format(rodada, tentativas), end="")
    chute = int(input(""))

    if(chute < 1 or chute > 100):
        print("Número fora do intervalo!")
        erro_anterior = abs(numero - chute)
        continue

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
    pontos -= erro_anterior #erro_anterior sendo usado por que se ele chutar um número fora do intervalo só o erro_anterior é definido



print("Fim de jogo!")
