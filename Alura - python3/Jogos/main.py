import adivinhacao
import forca

print("Olá!\nDigite sua opção!\n(1) Jogo da forca\n(2) Jogo de adivinhação\n")
numjogo = int(input(""))
if(numjogo == 1):
    forca.jogar()
elif(numjogo == 2):
    adivinhacao.jogar()


