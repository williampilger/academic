import json
import os
import multiplat as mp
from Server import Server

ENV = []
print(mp.dirConvert(os.path.dirname(__file__)+'/env.json'))
with open( mp.dirConvert(os.path.dirname(__file__)+'/env.json') ) as file:
    ENV = json.load(file)

server = Server(ENV['REST_SERVER']['HOSTNAME'], ENV['REST_SERVER']['PORT'])
# server = Server('', 8000)
server.start()