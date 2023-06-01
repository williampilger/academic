# Teste simples, desenvolvido pelo ChatGPT e adaptado por mim
# ChatURL: https://chat.openai.com/share/6eb088d0-3e9b-43e5-bcf8-7234f0d1f0b9

from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)
DATABASE = 'database.db'

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')

    if username=='will' and password=='123':
        return jsonify({'message': 'Login successful'}), 200

    return jsonify({'error': 'Invalid username or password'}), 401
    
if __name__ == '__main__':
    app.run()
