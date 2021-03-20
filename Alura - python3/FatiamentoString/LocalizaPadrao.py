import re #biblioteca build-in para lidar com padrões
#documentação completa em: <https://docs.python.org/3/library/re.html>

texto1 = "meu número de telefone é 99784-3909"
texto2 = "99784-3909 é meu celular"
texto3 = "Vim te dizer que 99784-3878 é meu celular"

#definindo que o padrão é formado por 5 números, um hifem e mais quatro números
#padrao = "[0123456789][0123456789][0123456789][0123456789][0123456789][-][0123456789][0123456789][0123456789][0123456789]"
#padrao = "[0-9][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]"
padrao = "[0-9]{5}[-][0-9]{4}"

retorno = re.search(padrao, texto1)
print(retorno.group())  #.group é a função para exibir somente o padrão encontrado

retorno = re.search(padrao, texto2)
print(retorno.group())  #.group é a função para exibir somente o padrão encontrado

retorno = re.search(padrao, texto3)
print(retorno.group())  #.group é a função para exibir somente o padrão encontrado


#*************TESTE 2*********************
texto1 = "meu número de telefone é 3695-1315"
texto2 = "997843909 é meu celular"
texto3 = "Vim te dizer que 9784-3878 é meu celular"
texto4 = "porcodio meu telefone é 40028922 e meu celular é 99784-3909"

#Definindo padrão
padrao = "[0-9]{4,5}[-]*[0-9]{4}" #O argumento '{4,5}' indica que podem ser 4 ou 5 dígitos antes do hifem; O '*' indica que o hifem pode ou não existir

print("Escrevendo os valores usando .search() e .group()")
for text in [texto1, texto2, texto3, texto4]:
    retorno = re.search(padrao, text)
    print(retorno.group())  # .group é a função para exibir somente o padrão encontrado

print("Escrevendo os resultados usando .findall()")
for text in [texto1, texto2, texto3, texto4]:
    retorno = re.findall(padrao, text)
    print(retorno)


