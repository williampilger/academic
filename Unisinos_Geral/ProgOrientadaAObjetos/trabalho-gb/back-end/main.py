import multiplat as mp
import json
import os
from classes.database import Database
from classes.employee import Employee
from classes.session import Session
from tools import anti_injection as ai

try:
    from flask import Flask, request, g
    from flask_cors import CORS, cross_origin
except:
    mp.install_lib('flask')
    mp.restart_program()


ENV = []
print(mp.dirConvert(os.path.dirname(__file__)+'/env.json'))
with open( mp.dirConvert(os.path.dirname(__file__)+'/env.json') ) as file:
    ENV = json.load(file)

db = Database()

app = Flask(__name__)
cors = CORS(app)

@app.route("/auth", methods=['GET','POST'])
@cross_origin()
def auth():
    print("email: ", ai(request.form.get('email')))
    print("senha: ",request.form.get('passwd'))
    print("SSID: ",request.args.get('SSID'))
    if request.method == 'POST': #login
        sess = Session.Login(
            ai(request.form.get('email')),
            ai(request.form.get('passwd'))
        )
    elif request.method == 'GET':
        sess = Session.Reauth(
            ai(request.args.get('SSID'))
        )
    return json.dumps( sess.toDict() if sess else {'msg':'2306201111 - user not authenticated'} ), 200 if sess else 401

@app.route("/account/new", methods=['POST'])
@cross_origin()
def account_new():
    result = {}
    status = 500
    print("SSID: ",request.form.get('SSID'))
    print("user: ",request.form.get('user'))
    sess = Session.Reauth(
        ai(request.form.get('SSID'))
    )
    if( sess ):
        if( sess.isAdm ):
            newUser = Employee(0, json.loads(request.form.get('user')))
            newUser.Save()
            if( newUser ):
                result = {
                    'msg': '2306201226 - success',
                    'user' : newUser.toDict()
                }
                status = 200
            else:
                result = {'msg': '2306201227 - fail'}
        else:
            result = {'msg': '2306201224 - user without privileges'}
    else:
        result = {'msg': '2306201222 - user not authenticated'}

    return json.dumps( result ), status

@app.route("/account/update", methods=['POST'])
@cross_origin()
def account_update():
    result = {}
    status = 500
    print("SSID: ",request.form.get('SSID'))
    print("user: ",request.form.get('user'))
    sess = Session.Reauth(
        ai(request.form.get('SSID'))
    )
    if( sess ):
        if( sess.isAdm ):
            user = ai(json.loads(request.form.get('user')))
            id = int(user.get('id'))
            if id > 0:
                newUser = Employee( id )
                newUser.Update(user, True)
                if( newUser ):
                    result = {
                        'msg': '2306201409 - successfully update the employee',
                        'user' : newUser.toDict()
                    }
                    status = 200
                else:
                    result = {'msg': '2306201227 - fail'}
                    status = 501
            else:
                result = {'msg': '2306201407 - Impossible update employee without id'}
                status = 406
        else:
            result = {'msg': '2306201224 - user without privileges'}
            status = 402
    else:
        result = {'msg': '2306201222 - user not authenticated'}
        status = 401

    return json.dumps( result ), status

@app.route("/timestamp/new", methods=['GET'])
@cross_origin()
def timestamp_new():
    result = {}
    status = 500
    sess = Session.Reauth(
        ai(request.args.get('SSID'))
    )
    if( sess ):
        if sess.employee.AddTimeStamping():
            result = { 'timestamps': sess.employee.timestamps }
            status = 200
        else:
            result = {'msg': 'FAIL'}
    else:
        result = {'msg': '2306201355 - user not authenticated'}
    return json.dumps( result ), status

@app.route("/timestamp/list", methods=['GET'])
@cross_origin()
def timestamp_list():
    result = {}
    status = 500
    sess = Session.Reauth(
        ai(request.args.get('SSID'))
    )
    if( sess ):
        result = { 'timestamps': sess.employee.timestamps }
        status = 200
    else:
        result = {'msg': '2306201831 - user not authenticated'}
    return json.dumps( result ), status


## HEADS UP!! Falta autenticação nesse métodos todos !!
@app.route("/admin/sessions/list", methods=['GET'])
@cross_origin()
def admin_sessions_list():
    l = Session.List()
    arr = [i.toDict() for i in l]
    result = {
        'sessions' : arr
    }
    return json.dumps( result )

@app.route("/admin/employees/list", methods=['GET'])
@cross_origin()
def admin_employees_list():
    l = Employee.List()
    arr = [i.toDict() for i in l]
    result = {
        'employees' : arr
    }
    return json.dumps( result )



app.run(ENV['REST_SERVER']['HOSTNAME'], ENV['REST_SERVER']['PORT'])




##############################################
# TESTES # TESTES # TESTES # TESTES # TESTES #
##############################################
# Criação de usuário
# from classes.employee import Employee
# teste = Employee(0,{'fullname':'William Pilger', 'email':'pilger.will@gmail.com', 'passwd':'123654', 'cpf':'04095978565'})
# if teste.Save():
#     print("sucesso")
##############################################
# Leitura do banco
# result = db.standard_select('employees')
# print('Resultado:')
# for item in result:
#     print('    ', item)
##############################################
# Criação de usuário
# from classes.employee import Employee
# teste = Employee('Bartolomeu', 'bartoeu@gmail.com', '123654', '04095978565')
# if teste.Save(): print("sucesso ao criar")
# teste.fullname = "Teste do fritz"
# if teste.Save(): print("sucesso ao atualizar")
# result = db.standard_select('employees')
# print('Resultado:')
# for item in result:
#     print('    ', item)
##############################################
# Fazendo login do usuário
# from classes.employee import Employee
# r = Employee.doLogin('pilger.will@gmail.com', 'teste')
# print(r)
# r = Employee.doLogin('pilger.will@gmail.com', '123654')
# print(r)
##############################################
# Marcando o ponto
# from classes.employee import Employee
# employee = Employee(1)
# print(employee.fullname)
# employee.AddTimeStamping()
# employee.AddTimeStamping()
# employee.AddTimeStamping()
# print(employee.timestamps)
##############################################
# Fazendo login via session
# from classes.session import Session
# r = Session.Login('pilger.will@gmail.com', '123654')
# print(r)
##############################################
# from classes.session import Session
# r = Session.Login('teste@123', '123')
# print(r.toDict())
##############################################
# from classes.session import Session
# r = Session.Reauth('fkfyofxqtwozahzvlmppvsexyfaoceuv')
# print(r.toDict() if r else 'NOT AUTHENTICATED')
##############################################