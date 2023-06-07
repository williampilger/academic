from http.server import HTTPServer
from Router import Router

class Server(HTTPServer):
    def __init__(self, hostname:str, port:int):
        self.params = (hostname, port)
        super().__init__( self.params, Router)

    def start(self):    
        print(f"Iniciando o serviço na porta {self.params[1]}")
        self.serve_forever()
