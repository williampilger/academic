# Teste simples, desenvolvido pelo ChatGPT e adaptado por mim
# ChatURL: https://chat.openai.com/share/6eb088d0-3e9b-43e5-bcf8-7234f0d1f0b9

from flask import Flask, Blueprint

app = Flask(__name__)

auth_blueprint = Blueprint('auth', __name__, url_prefix='/auth')
products_blueprint = Blueprint('products', __name__, url_prefix='/products')
category_blueprint = Blueprint('category', __name__, url_prefix='/category')

@auth_blueprint.route('/login', methods=['POST'])
def login():
    # Lógica de login aqui
    return 'Login successful'

@auth_blueprint.route('/logout', methods=['POST'])
def logout():
    # Lógica de logout aqui
    return 'Logout successful'

@products_blueprint.route('', methods=['GET'])
def list_products():
    # Lógica para listar os produtos aqui
    return 'List of products'

@category_blueprint.route('/<category_id>/products', methods=['GET'])
def list_category_products(category_id):
    # Lógica para listar produtos de uma determinada categoria
    return f'List of products for category {category_id}'

app.register_blueprint(auth_blueprint)
app.register_blueprint(products_blueprint)
app.register_blueprint(category_blueprint)

if __name__ == '__main__':
    app.run()
