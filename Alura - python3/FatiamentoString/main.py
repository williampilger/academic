from UrlFind import ExtratorArgumentoURL

objeto = ExtratorArgumentoURL("https://www.meubanco.com/resultadodapesquisa?saldo=teste&testeminha=trigonometria")

print(objeto.retorna_valor_argumento("saldo"))
