def cria_conta(numero, titular, saldo, limite):
    conta = {"numero": numero, "titular": titular, "saldo": saldo, "limite", limite}
    return conta

def deposita(conta, valor):
    conta["valor"] += valor

def saca(conta, valor):
    conta["valor"] -= valor

def extrato(conta):
    print(conta["valor"])

