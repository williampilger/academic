# Teste simples, desenvolvido pelo ChatGPT e adaptado por mim
# ChatURL: https://chat.openai.com/share/6eb088d0-3e9b-43e5-bcf8-7234f0d1f0b9

from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class RequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/auth/login':
            self.handle_login()
        elif self.path == '/auth/logout':
            self.handle_logout()

    def do_GET(self):
        if self.path == '/products/list':
            self.handle_list_products()

    def handle_login(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        data = json.loads(body)

        username = data.get('username')
        password = data.get('password')

        # Lógica de login aqui

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        response = {'message': 'Login successful'}
        self.wfile.write(json.dumps(response).encode('utf-8'))

    def handle_logout(self):
        # Lógica de logout aqui

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        response = {'message': 'Logout successful'}
        self.wfile.write(json.dumps(response).encode('utf-8'))

    def handle_list_products(self):
        # Lógica para listar os produtos aqui
        products = ['Product 1', 'Product 2', 'Product 3']

        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        response = {'products': products}
        self.wfile.write(json.dumps(response).encode('utf-8'))

def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Servidor iniciado na porta 8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    run_server()
