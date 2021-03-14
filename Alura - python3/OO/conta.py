class Conta:

    def __init__(self, numero, titular, saldo, limite):
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.__limite = limite

    def extrato(self):
        print("O saldo de {} é de {} reais.".format(self.__titular, self.__saldo))

    def deposita(self, valor):
        print("Depositando {} reais na conta de {}.".format(valor, self.__titular))
        self.__saldo += valor

    def saca(self, valor):
        print("Sacando {} reais na conta de {}.".format(valor, self.__titular))
        self.__saldo -= valor

    def transfere(self, valor, destino):
        self.saca(valor)
        destino.deposita(valor)

    @property
    def limite(self):
        return self.__limite

    @limite.setter
    def limite(self, valor):
        self.__limite = valor

