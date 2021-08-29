import os
import platform
import time
from datetime import datetime

eh_windows = platform.system() == "Windows"
eh_linux = platform.system() == "Linux"

def restart_program():
	if(eh_windows):
		os.system(f"python \"{__file__}\"")
	elif(eh_linux):
		os.system(f"python3 \"{__file__}\"")
	quit()

def limpar_terminal():
	if(eh_windows):
		os.system("cls")
	elif(eh_linux):
		os.system("clear")

def sair(code):
	limpar_terminal()
	if(code == 0):
		print("OOOps! Esta função ainda está em desenvolvimento.\n\nEstamos finalizando.")
	elif(code == 1):
		print("Sistema operacional não suportado.\n\nEstamos finalizando.")
	elif(code == 2):
		print("Biblioteca necessária não disponível.\n\nEstamos finalizando.")

	time.sleep(5)
	quit()

def install_lib(lib):
	if(eh_windows):
		comand = "pip install "
	elif(eh_linux):
		comand = "pip3 install "
	else:
		sair(1)
	print("\nINSTALANDO BIBLIOTECA NECESSÁRIA, AGUARDE!\n(CONEXÃO COM INTERNET NECESSÁRIA)")
	os.system(comand + lib)
	restart_program()

##########################################################################################################

try:
	import tensorflow
	from tensorflow import keras
except:
	install_lib("tensorflow")
try:
	import matplotlib.pyplot as plt
except:
	sair(2)

dataset = keras.datasets.fashion_mnist
((imagens_treino,identificadores_treino),(imagens_teste, identificacoes_teste)) = dataset.load_data()

imagens_treino /= float(255)#normalização (os pixels que variavam de 0 - 255 agora variam de 0.0000 - 1.0000)

modelo = keras.Sequential([
	keras.layers.Flatten(input_shape=(28, 28)),#achata as imagens (cada imagens 28x28 do modelo vai ser achatada em um vetor, com uma única dimensão)
	keras.layers.Dense(256, activation=tensorflow.nn.relu),#Cria uma segunda camada com 256 processos (esse valor é alteatório, pode ser alterado sem problemas) e usa o modelo relu da tensorflow
	keras.layers.Dense(10, activation=tensorflow.nn.softmax)#10 possibilidades de saídas. 
])

modelo.compile(optimizer='adam', loss='sparce_categorical_crossentropy', metrics=['accuracy'])

modelo.fit(imagens_treino, identificadores_treino, epochs=5)

