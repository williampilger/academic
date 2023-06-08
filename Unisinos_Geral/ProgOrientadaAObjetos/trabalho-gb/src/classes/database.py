import sqlite3
import hashlib
import os

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
        print("Criando banco de dados")
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

    def query(self, query, params=()):
        result = self.__cursor.execute(query, params)
        self.__conn.commit()
        return result

    def standard_select(self, table:str, where_sent:str, where_params=() ):
        return self.query(f'SELECT * FROM {table} WHERE {where_sent}', where_params)

    def standard_insert(self, table, fields_name:list[str], fields_values:tuple):
        n_args = len(fields_name)
        if(n_args == len(fields_values)):
            pfields = ','.join(fields_name) 
            pval = ','.join(['?']*len(fields_name))
            return self.query(f'INSERT INTO {table} ({pfields}) VALUES ({pval})', fields_values)
        else:
            raise ValueError("err_2306081915 - Number of arguments is different")
        return False
    
    @staticmethod
    def getCommon():
        if Database.__comminDatabase is not None:
            return Database.__comminDatabase
        else:
            raise ValueError("err_2306081943 - Attempt to retrieve common database before instantiate this")