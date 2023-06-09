import hashlib
from classes.database import Database
from tools import LogHandler

class Employer:
    
    __roles = ['Generic Employer', 'Administrator', 'Software Developper', 'Secretary', 'Marketer', 'Owner', 'Director']
    __adm_roles = ['Owner', 'Administrator']

    def __init__(self, fullname:str, email:str, passwd:str, cpf:str, phone:str='', role:str=''):
        self.__id = 0
        self.fullname = fullname
        self.email = email
        self.passwd = hashlib.md5(passwd.encode()).hexdigest()
        self.cpf = cpf
        self.phone = phone
        self.role = role if role in self.__roles else self.__roles[0]


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
                return True
            else:
                LogHandler.new(0, 2306081946, 'fail on save database entry')
        return False

    @staticmethod
    def doLogin(email, passwd):
        r = Database.getCommon().standard_select(
            'employers',
            ('email','passwd'),
            (email, hashlib.md5(passwd.encode()).hexdigest())
        )
        if(len(r)>0):
            if(len(r)==1):
                print("FAZENDO LOGIN")
                return True
            else:
                LogHandler.new(0, 2306082153, 'more then one users with same password and email')
        else:
            LogHandler.new(1, 2306082154, 'incorrect combination of password and email informed')
        return False

    

