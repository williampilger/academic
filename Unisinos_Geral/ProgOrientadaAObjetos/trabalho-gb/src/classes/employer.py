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
    def timestamps(self)->List[Tuple[int,int|None]]:
        r = Database.getCommon().standard_select(
            'timeregister',
            ('employer',),
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
                    self.passwd,
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
                    self.passwd,
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
                self.Update(r[0], False)
                return True
            else:
                LogHandler.new(1, 2306132034, 'more then one users with same password and email')
        else:
            LogHandler.new(0, 2306132035, 'user not found')
        return False

    @staticmethod
    def doLogin(email, passwd) -> int: #returns 0 if it fails
        r = Database.getCommon().standard_select(
            'employers',
            ('email','passwd'),
            (email, hashlib.md5(passwd.encode()).hexdigest())
        )
        if(len(r)>0):
            if(len(r)==1):
                return r['id']
            else:
                LogHandler.new(0, 2306082153, 'more then one users with same password and email')
        else:
            LogHandler.new(1, 2306082154, 'incorrect combination of password and email informed')
        return 0
    
    def Update(self, data:dict={}, autoSave:bool=False):

        if 'fullname' in data: self.fullname = data['fullname']
        if 'email' in data: self.email = data['email']
        if 'passwd' in data: self.passwd = data['passwd']
        if 'cpf' in data: self.cpf = data['cpf']
        if 'phone' in data: self.phone = data['phone']
        if 'role' in data: self.role = data['role']
        
        LogHandler.new(2,2306132003,'successfully update employer')

        if autoSave:
            self.Save()
    
    def AddTimeStamping(self):
        r = Database.getCommon().standard_insert(
            'timeregister',
            ['employer', 'timestamp'],
            (
                self.__id,
                int(time.time())
            )
        )
        if(r>0):
            return True
        else:
            LogHandler.new(0, 2306131954, 'fail on save database entry')

    

