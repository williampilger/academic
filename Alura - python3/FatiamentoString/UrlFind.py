class ExtratorArgumentoURL:
    def __init__(self, url):
        if self.stringEhValida(url):
            self.url = url
        else:
            raise LookupError('Url inválida')

    def __eq__(self, outraref):
        return self.url == outraref.url

    def __str__(self):
        return self.url

    @staticmethod
    def stringEhValida(url):
        if url.startswith("https://www.meubanco.com/"):
            return True
        else:
            return False

    def retorna_valor_argumento(self, argumento_buscado):
        index_inicio, index_fim = self.localiza_valor_argumento(argumento_buscado)
        return self.url[index_inicio:index_fim]

    def localiza_valor_argumento(self, argumento_localizar): #localiza um argumento na URL
        index_inicial = self.url.find("?") + 1 #localiza o '?' primeiro, evitando que o texto inicial da URL atrapalhe
        index_inicial += self.url[index_inicial:].find(argumento_localizar) + len(argumento_localizar) + 1
        index_final = self.url[index_inicial:].find("&") + index_inicial
        if(index_inicial > index_final):#caso não seja encontrado o '&' a função find retorna -1, e essa condição será atendida
            index_final = len(self.url)
        return index_inicial,index_final
