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

from classes.employer import Employer
teste = Employer('William Pilger', 'plger.will@gmail.com', '123654', '04095978565')
if teste.Save(): print("sucesso")
