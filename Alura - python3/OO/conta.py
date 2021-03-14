class Conta:

    def __init__(self, numero, titular, saldo, limite):
        self.__numero = numero
        self.__titular = titular
        self.__saldo = float(saldo)
        self.__limite = float(limite)

    def extrato(self):
        print("O saldo de {} é de {} reais.".format(self.__titular, self.__saldo))

    def deposita(self, valor):
        print("Depositando {} reais na conta de {}.".format(valor, self.__titular))
        self.__saldo += valor

    def consulta_disponibilidade(self, valor_a_sacar):
        return valor_a_sacar <= self.__saldo+self.__limite

    def saca(self, valor):
        if(self.consulta_disponibilidade(valor)):
            print("Sacando R$ {:.2F} na conta de {}.".format(valor, self.__titular))
            self.__saldo -= valor
        else:
            print("Saldo indisponível.")

    def transfere(self, valor, destino):
        if(self.consulta_disponibilidade(valor)):
            print("Transferindo R$ {:.2F} para {}".format(float(valor), destino.titular))
            self.saca(valor)
            destino.deposita(valor)
        else:
            print("Saldo indisponível.")

    @property
    def limite(self):
        return self.__limite

    @limite.setter
    def limite(self, valor):
        self.__limite = valor

    @property
    def titular(self):
        return self.__titular

    @staticmethod
    def cod_banco():
        return "001"
