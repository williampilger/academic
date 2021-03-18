class Midia:
    def __init__(self, nome, ano_lancamento):
        self._nome = nome.title()
        self._ano = ano_lancamento
        self._likes = 0

    @property
    def likes(self):
        return self._likes

    def classificar(self, like):
        # recebe True para avaliação positiva, e False para negatica
        if(like):
            self._likes += 1
        else:
            self._likes -= 1

    @property
    def nome(self):
        return self._nome

class Filme(Midia):
    def __init__(self, nome, ano_lancamento, duracao, diretor, categoria):
        super().__init__(nome, ano_lancamento)
        self._duracao = duracao
        self._diretor = diretor
        self._categoria = categoria

    def __str__(self):
        return f'{self._nome} - {self._ano} - {self._duracao} min'


class Serie(Midia):
    def __init__(self, nome, ano_lancamento, numero_temporadas, diretor, categoria):
        super().__init__(nome, ano_lancamento)
        self._temporadas = numero_temporadas
        self._diretor = diretor
        self._categoria = categoria

    def __str__(self):
        return f'{self._nome} - {self._ano} - {self._temporadas} temporadas'

class Musica(Midia):
    def __init__(self, nome, ano_lancamento, duracao, artista, genero):
        super().__init__(nome, ano_lancamento)
        self._duracao = duracao
        self._artista = artista
        self._genero = genero

    def __str__(self):
        return f'{self._nome} - {self._ano} - {self._duracao} min'

