import hashlib
from classes.database import Database
from typing import List, Tuple
from tools import LogHandler
import time

class Employer:
    
    __roles = ['Generic Employer', 'Administrator', 'Software Developper', 'Secretary', 'Marketer', 'Owner', 'Director']
    __adm_roles = ['Owner', 'Administrator']

    def __init__(self, id:int=0, data:dict={}):
        self.__id = id
        self.fullname = 'FULL NAME'
        self.email = ''
        self.passwd = ''
        self.cpf = ''
        self.phone = ''
        self.role = ''
        if(id == 0): #NEW USER
            self.Update(data, False)
        else:
            self.Retrieve()

    @property
    def passwd(self):
        return '********'
    @passwd.setter
    def passwd(self, value):
        self.__passwd = hashlib.md5(value.encode()).hexdigest()

    @property
    def role(self):
        return self.__role
    @role.setter
    def role(self, role):
        self.__role = role if role in self.__roles else self.__roles[0]

    @property
    def isAdm(self):
        print("My role:", self.role,"My name:",self.fullname)
        return self.role in Employer.__adm_roles

    @property
    def id(self):
        return self.__id

    @property
    def timestamps(self)->List[Tuple[int,int|None]]:
        r = Database.getCommon().standard_select(
            'timeregister',
            ('employerID',),
            (self.__id,)
        )
        
        results = []
        entrada = None
        for entry in [item['timestamp'] for item in r]: ## essa maluquice filtra só o timestamp dos itens (obviamente é menos eficiente que dar um entry=entry['timestamp'], mas é legal de ver)
            if entrada is None:
                entrada = entry
            else:
                results.append((entrada,entry))
                entrada = None
        if entrada is not None:
            results.append((entrada,None))
        return results

        # return zip(list[0::2],list[1::2])



    def Save(self):
        if self.__id == 0:
            r = Database.getCommon().standard_insert(
                'employers',
                ['fullname', 'email', 'passwd', 'cpf', 'phone', 'role'],
                (
                    self.fullname,
                    self.email,
                    self.__passwd,
                    self.cpf,
                    self.phone,
                    self.role
                )
            )
            if(r>0):
                self.__id = r
                LogHandler.new(2, 2306132003, 'successfully create a employer database entry')
                return True
            else:
                LogHandler.new(0, 2306082018, 'fail on save database entry')
        else:
            r = Database.getCommon().standard_update(
                'employers',
                ['fullname', 'email', 'passwd', 'cpf', 'phone', 'role'],
                (
                    self.fullname,
                    self.email,
                    self.__passwd,
                    self.cpf,
                    self.phone,
                    self.role
                ),
                ['id'],
                (self.__id,)
            )
            if(r):
                LogHandler.new(2, 2306132004, 'successfully update a employer database entry')
                return True
            else:
                LogHandler.new(0, 2306081946, 'fail on save database entry')
        return False

    def Retrieve(self)->bool:
        r = Database.getCommon().standard_select(
            'employers',
            ('id',),
            (self.__id,)
        )
        if(len(r)>0):
            if(len(r)==1):
                print("FAZENDO LOGIN")
                self.Update(r[0], False, True)
                return True
            else:
                LogHandler.new(1, 2306132034, 'more then one users with same ID')
        else:
            LogHandler.new(0, 2306132035, f'user {self.id} not found')
        return False

    @staticmethod
    def doLogin(email, passwd): #returns userID and Bool with "isAdm" flags 0 if it fails
        r = Database.getCommon().standard_select(
            'employers',
            ['email','passwd'],
            (email, hashlib.md5(passwd.encode()).hexdigest())
        )
        if(len(r)>0):
            if(len(r)==1):
                return int(r[0]['id']),r[0]['role'] in Employer.__adm_roles
            else:
                LogHandler.new(0, 2306082153, 'more then one users with same password and email')
        else:
            LogHandler.new(1, 2306082154, 'incorrect combination of password and email informed')
        return 0,False
    
    @staticmethod
    def New(fullname:str, email:str, passwd:str, cpf:str='', phone:str='', role:str=''):
        usr = Employer()
        usr.fullname = fullname
        usr.email = email
        usr.passwd = passwd
        usr.cpf = cpf
        usr.phone = phone
        usr.role = role
        return usr
    
    @staticmethod
    def List():
        r = Database.getCommon().standard_select(
            'employers'
        )
        return [ Employer(0,item) for item in r]
    
    def Update(self, data:dict={}, autoSave:bool=False, raw:bool=False):

        if 'id' in data: self.__id = data['id']
        if 'fullname' in data: self.fullname = data['fullname']
        if 'email' in data: self.email = data['email']
        if 'passwd' in data:
            if raw:
                self.__passwd = data['passwd']
            else:
                self.passwd = data['passwd']
        if 'cpf' in data: self.cpf = data['cpf']
        if 'phone' in data: self.phone = data['phone']
        if 'role' in data: self.role = data['role']
        
        LogHandler.new(2,2306201250,'successfully update employer ' + str(self.id))

        if autoSave:
            self.Save()
    
    def toDict(self):
        return {
            'id': self.__id,
            'fullname': self.fullname,
            'email': self.email,
            'cpf': self.cpf,
            'phone': self.phone,
            'role': self.role,
            'isAdm': self.isAdm
        }
    
    def AddTimeStamping(self):
        r = Database.getCommon().standard_insert(
            'timeregister',
            ['employerID', 'timestamp'],
            (
                self.__id,
                int(time.time())
            )
        )
        if(r>0):
            return True
        else:
            LogHandler.new(0, 2306131954, 'fail on save database entry')

    

