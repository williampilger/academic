import hashlib
from classes.database import Database
from typing import List, Tuple
from tools import LogHandler, get_random_string
from classes.employer import Employer

class Session:

    def __init__(self, id:int=0, data:dict={}):
        self.__id = id
        self.employerID = 0
        self.__employer = None
        if(id == 0): #NEW SESSION
            self.__SSID = get_random_string(32)
            self.Update(data, False)
        else:
            self.Retrieve()

    @property
    def SSID(self):
        return self.__SSID

    @property
    def employer(self):
        if self.__employer is None:
            self.__employer = Employer(self.employerID)
        return self.__employer

    @property
    def isAdm(self):
        return self.employer.isAdm

    @property
    def id(self):
        return self.__id

    def toDict(self):
        return {
            'SSID' : self.__SSID,
            'employer' : self.employer.toDict()
        }

    def Save(self):
        if self.__id == 0:
            r = Database.getCommon().standard_insert(
                'employers_sessions',
                ['SSID', 'employerID'],
                (
                    self.__SSID,
                    self.employerID
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
                ['SSID', 'employerID'],
                (
                    self.__SSID,
                    self.employerID
                ),
                ['id'],
                (self.__id,)
            )
            if(r):
                self.__id = r
                LogHandler.new(2, 2306132121, 'successfully update a employer_session database entry')
                return True
            else:
                LogHandler.new(0, 2306132122, 'fail on save database entry')
        return False

    def Retrieve(self)->bool:
        r = Database.getCommon().standard_select(
            'employers_sessions',
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
        if 'id' in data: self.__id = data['id']
        if 'SSID' in data: self.__SSID = data['SSID']
        if 'employerID' in data: self.employerID = data['employerID']
        
        LogHandler.new(2,2306132138,'successfully update employer_session')

        if autoSave:
            self.Save()

    @staticmethod
    def Login(email, passwd):
        employer_id,isAdm = Employer.doLogin(email, passwd)
        if( employer_id>0 ):
            sess = Session()
            sess.employerID = employer_id
            sess.Save()
            return sess
        return None

    @staticmethod
    def Reauth(ssid):
        r = Database.getCommon().standard_select(
            'employers_sessions',
            ('SSID',),
            (ssid,)
        )
        if(len(r)>0):
            sess = Session(0, r[0])
            LogHandler.new(2,2306201246,'successfully reauth session '+ str(sess.id) )
            return sess
        else:
            LogHandler.new(0, 2306201043, 'session not valid')
        return False
    
    @staticmethod
    def List():
        try:
            r = Database.getCommon().standard_select(
                'employers_sessions'
            )
            return [ Session(0,item) for item in r]
        except Exception as e:
            LogHandler.new(0, 2306201336, 'fail: ' + str(e))