import sqlite3
import hashlib
import os
from tools import LogHandler

class Database:

    __comminDatabase = None

    def __init__(self, filename:str='sqlite_local_database.db'):
        initialized = os.path.exists(filename)
        self.__conn = sqlite3.connect(filename)
        self.__cursor = self.__conn.cursor()

        if not initialized: self.initialize()

        if Database.__comminDatabase is None:
            Database.__comminDatabase = self

    def __del__(self):
        self.__conn.close()

    def initialize(self):
        LogHandler.new(2,2306082039,'creating database')
        try:
            self.__cursor.execute('''
            CREATE TABLE IF NOT EXISTS employers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                fullname TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                passwd TEXT NOT NULL,
                cpf TEXT,
                phone TEXT,
                role TEXT NOT NULL
            )
            ''')
            self.__cursor.execute('INSERT INTO employers (fullname,email,passwd,role) VALUES (?,?,?,?)', ('Admin','dev@sample.com.br',hashlib.md5('root'.encode()).hexdigest(),'Administrator'))
            self.__conn.commit()
            LogHandler.new(1,2306082041,'successfully created the database')
        except:
            LogHandler.new(1,2306082040,'impossible to create database')
            exit()

    def query(self, query, params=()):
        result = self.__cursor.execute(query, params)
        self.__conn.commit()
        return result

    def standard_select(self, table:str, where_sent:list[str]=[], where_params=() ):
        result = {}
        if(len(where_sent) == len(where_params)):
            try:
                if(len(where_sent) == 0):
                    w = '1'
                else:
                    w = ' AND '.join([f'{item}=?' for item in where_sent])

                r = self.query(f'SELECT * FROM {table} WHERE {w}', where_params)
                columns = [columns[0] for columns in r.description]
                result = [dict(zip(columns, linha)) for linha in r.fetchall()]

            except:
                LogHandler.new(0,2306082044,'impossible do select')
        else:
            LogHandler.new(0,2306082113,'whrong number of arguments')

        return result

    def standard_insert(self, table:str, fields_name:list[str], fields_values:tuple)->int: #return 0 if fail
        n_args = len(fields_name)
        if(n_args == len(fields_values)):
            try:
                pfields = ','.join(fields_name) 
                pval = ','.join(['?']*len(fields_name))
                r = self.query(f'INSERT INTO {table} ({pfields}) VALUES ({pval})', fields_values)
                return r.lastrowid
            except:
                LogHandler.new(1,2306082106, 'impossible insert to database table')
        else:
            LogHandler.new(1,2306081915,'number of arguments is different')
        return 0
    
    def standard_update(self, table:str, fields_name:list[str]=[], fields_values:tuple=(), where_fields:list[str]=[], where_values:tuple=())->bool:
        if(len(fields_name) == len(fields_values) and len(where_fields) == len(where_values)):
            try:
                pfield = ' , '.join([f'{item} = ?' for item in fields_name])
                pwhere = ' AND '.join([f'{item}=?' for item in where_fields])
                self.query(f'UPDATE {table} SET {pfield} WHERE {pwhere}', fields_values+where_values)
                return True
            except:
                LogHandler.new(1,2306082104,'impossible update table entries')
        else:
            LogHandler.new(1,2306082057,'number of arguments is different')
        return False
    
    @staticmethod
    def getCommon():
        if Database.__comminDatabase is not None:
            return Database.__comminDatabase
        else:
            LogHandler.new(1,2306081943,'Attempt to retrieve common database before instantiate this')