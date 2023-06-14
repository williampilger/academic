import hashlib
from classes.database import Database
from typing import List, Tuple
from tools import LogHandler, get_random_string
from employer import Employer

class Session:

    def __init__(self, id:int=0, data:dict={}):
        self.__id = id
        if(id == 0): #NEW SESSION
            self.__SSID = get_random_string(32)
            self.Update(data, False)
        else:
            self.Retrieve()

    def Save(self):
        if self.__id == 0:
            r = Database.getCommon().standard_insert(
                'employers_sessions',
                ['SSID', 'employer'],
                (
                    self.__SSID,
                    self.employer
                )
            )
            if(r>0):
                self.__id = r
                LogHandler.new(2, 2306132119, 'successfully create a employer_session database entry')
                return True
            else:
                LogHandler.new(0, 2306132120, 'fail on save database entry')
        else:
            r = Database.getCommon().standard_update(
                'employers_sessions',
                ['SSID', 'employer'],
                (
                    self.__SSID,
                    self.employer
                ),
                ['id'],
                (self.__id,)
            )
            if(r):
                LogHandler.new(2, 2306132121, 'successfully update a employer_session database entry')
                return True
            else:
                LogHandler.new(0, 2306132122, 'fail on save database entry')
        return False

    def Retrieve(self)->bool:
        r = Database.getCommon().standard_select(
            'employers',
            ('id',),
            (self.__id,)
        )
        if(len(r)>0):
            if(len(r)==1):
                self.Update(r[0], False)
                return True
            else:
                LogHandler.new(1, 2306132034, 'more then one users with same password and email')
        else:
            LogHandler.new(0, 2306132035, 'user not found')
        return False

    
    def Update(self, data:dict={}, autoSave:bool=False):
        if 'SSID' in data: self.SSID = data['SSID']
        if 'employer' in data: self.employer = data['employer']
        
        LogHandler.new(2,2306132138,'successfully update employer_session')

        if autoSave:
            self.Save()
    
    def Login(self, email, passwd):
        employer_id = Employer.doLogin(email, passwd)
        if( employer_id>0 ):
            self.employer = employer_id
            self.Save()
            return True
        return False