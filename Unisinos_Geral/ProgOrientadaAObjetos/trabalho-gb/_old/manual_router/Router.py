from http.server import BaseHTTPRequestHandler
import json

class Router(BaseHTTPRequestHandler):
    def do_POST(self):
        self.handle_request('POST')
    def do_GET(self):
        self.handle_request('GET')

    
    def handle_request(self, type:str):
        result = [ {'msg':'2306062108 - Endpoint not found'}, 404 ]
        
        data = {}
        if self.headers['Content-Length'] is not None:
            content_length = int( self.headers['Content-Length'] )
            body = self.rfile.read(content_length)
            data = json.loads(body)

        path = self.path.split('/')[1:]
        print(path)
        match path[0]:
            case 'auth':
                match path[1]:
                    case 'login':
                        result = [{'msg':"Este é um teste de rota válida"}, 200]
                        
                    case 'logout':
                        result = [{'msg':"Este é um teste de outra rota válida"}, 201]
            case 'list':
                result = [{'msg':"Teste de rota curta válida"}, 200]
        
        self.send_response(result[1])
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps(result[0]).encode('utf-8'))
