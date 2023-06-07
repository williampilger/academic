import multiplat as mp
import json
import os

try:
    from flask import Flask
except:
    mp.install_lib('flask')
    mp.restart_program()


ENV = []
print(mp.dirConvert(os.path.dirname(__file__)+'/env.json'))
with open( mp.dirConvert(os.path.dirname(__file__)+'/env.json') ) as file:
    ENV = json.load(file)


app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"


app.run(ENV['REST_SERVER']['HOSTNAME'], ENV['REST_SERVER']['PORT'])