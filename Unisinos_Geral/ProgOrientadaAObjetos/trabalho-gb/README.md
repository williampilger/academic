# Trabalho do Grau B

## Início rápido

- [ ] Preparação do ambiente
    - Criar o container:
        - Ex.: `python -m venv _env`
        - `source _env/bin/activate`
    - Instalar as bibliotecas necessárias:
        - `pip install flask`
        - `pip install flask-cors`
    - Instalar o Node
        - `cd front-end && npm i`
- [ ] Iniciar servidor Back-End:
    - `cd back-end && python3 main.py`
- [ ] Iniciar servidor Front-End:
    - `cd front-end && npm start`
- [ ] Iniciar o uso:
    - Acesse o front com o usuário ADM
        - Username: `dev@sample.com.br`
        - Password: `root`
    - Crie novos usuários e modifique seus dados a vontade

**PS:** A primeira requisição será um pouco lenta, pois o banco SQLite3 é criado no primeiro momento em que ele é necessário.



## Todo o resto da balela

Ao inicializar o banco, é criado automaticamente um usuário de e-mail `dev@sample.com.br` e senha `root`.



### Criando o ambiente isolado

> python -m venv _env

Pra isso é necessário o pacote `venv`, instalado via PIP.


### ToDo

- [X] Implementar banco de dados
- [ ] Implementar execução em container

