import multiplat as mp
import json
import os
from classes.database import Database

try:
    from flask import Flask
except:
    mp.install_lib('flask')
    mp.restart_program()


ENV = []
print(mp.dirConvert(os.path.dirname(__file__)+'/env.json'))
with open( mp.dirConvert(os.path.dirname(__file__)+'/env.json') ) as file:
    ENV = json.load(file)

db = Database()

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


#app.run(ENV['REST_SERVER']['HOSTNAME'], ENV['REST_SERVER']['PORT'])













##############################################
# TESTES # TESTES # TESTES # TESTES # TESTES #
##############################################
# Criação de usuário
# from classes.employer import Employer
# teste = Employer('William Pilger', 'pilger.will@gmail.com', '123654', '04095978565')
# if teste.Save(): print("sucesso")
##############################################
# Leitura do banco
# result = db.standard_select('employers')
# print('Resultado:')
# for item in result:
#     print('    ', item)
##############################################
# Criação de usuário
# from classes.employer import Employer
# teste = Employer('Bartolomeu', 'bartoeu@gmail.com', '123654', '04095978565')
# if teste.Save(): print("sucesso ao criar")
# teste.fullname = "Teste do fritz"
# if teste.Save(): print("sucesso ao atualizar")
# result = db.standard_select('employers')
# print('Resultado:')
# for item in result:
#     print('    ', item)
##############################################
# Fazendo login
# from classes.employer import Employer
# r = Employer.doLogin('pilger.will@gmail.com', 'teste')
# print(r)
# r = Employer.doLogin('pilger.will@gmail.com', '123654')
# print(r)
##############################################
