import sqlite3
import hashlib
import os
from tools import LogHandler
from flask import g

class Database:

    __comminDatabase = None

    def __init__(self, filename:str='sqlite_local_database.db'):
        self.initialized = os.path.exists(filename)

        if Database.__comminDatabase is None:
            Database.__comminDatabase = self

    def __delete__(self):
        self.conn.close()

    @staticmethod
    def get_db(filename:str='sqlite_local_database.db'):
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sqlite3.connect(filename)
        return db

    @staticmethod
    def close_db():
        db = getattr(g, '_database', None)
        if db is not None:
            db.close()
    
    @property
    def conn(self):
        if not self.initialized: self.initialize()
        return Database.get_db()

    @property
    def cursor(self):
        return self.conn.cursor()

    def initialize(self):
        LogHandler.new(2,2306082039,'creating database')
        try:
            self.initialized = True
            self.cursor.execute('''
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
            self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS employers_sessions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                employerID INTEGER NOT NULL,
                SSID TEXT UNIQUE NOT NULL,
                FOREIGN KEY (employerID)
                    REFERENCES employers (id)
            )
            ''')
            self.cursor.execute('''
            CREATE TABLE IF NOT EXISTS timeregister (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                employerID INTEGER NOT NULL,
                timestamp INTEGER NOT NULL,
                FOREIGN KEY (employerID)
                    REFERENCES employers (id)
            )
            ''')
            self.cursor.execute('INSERT INTO employers (fullname,email,passwd,role) VALUES (?,?,?,?)', ('Admin','dev@sample.com.br',hashlib.md5('root'.encode()).hexdigest(),'Administrator'))
            self.conn.commit()
            LogHandler.new(2,2306082041,'successfully created the database')
        except Exception as e:
            LogHandler.new(1,2306082040,'impossible to create database: ' + str(e) )
            exit()

    def query(self, query, params=()):
        result = self.cursor.execute(query, params)
        self.conn.commit()
        return result

    def standard_select(self, table:str, where_sent:tuple[str]=[], where_params=() ):
        result = {}
        if(len(where_sent) == len(where_params)):
            try:
                if(len(where_sent) == 0):
                    w = '1'
                else:
                    w = ' AND '.join([f'{item}=?' for item in where_sent])
                # print(f'SELECT * FROM {table} WHERE {w}', where_params)
                r = self.query(f'SELECT * FROM {table} WHERE {w}', where_params)
                columns = [columns[0] for columns in r.description]
                result = [dict(zip(columns, linha)) for linha in r.fetchall()]

            except Exception as e:
                LogHandler.new(0,2306082044,'impossible do select: ' + str(e))
        else:
            LogHandler.new(0,2306082113,'whrong number of arguments')

        return result

    def standard_insert(self, table:str, fields_name:tuple[str], fields_values:tuple)->int: #return 0 if fail
        n_args = len(fields_name)
        if(n_args == len(fields_values)):
            try:
                pfields = ','.join(fields_name) 
                pval = ','.join(['?']*len(fields_name))
                r = self.query(f'INSERT INTO {table} ({pfields}) VALUES ({pval})', fields_values)
                return r.lastrowid
            except Exception as e:
                LogHandler.new(1,2306082106, 'impossible insert to database table: ' + str(e))
        else:
            LogHandler.new(1,2306081915,'number of arguments is different')
        return 0
    
    def standard_update(self, table:str, fields_name:tuple[str]=[], fields_values:tuple=(), where_fields:tuple[str]=[], where_values:tuple=())->bool:
        if(len(fields_name) == len(fields_values) and len(where_fields) == len(where_values)):
            try:
                pfield = ' , '.join([f'{item} = ?' for item in fields_name])
                pwhere = ' AND '.join([f'{item}=?' for item in where_fields])
                self.query(f'UPDATE {table} SET {pfield} WHERE {pwhere}', fields_values+where_values)
                return True
            except Exception as e:
                LogHandler.new(1,2306082104,'impossible update table entries: ' + str(e))
        else:
            LogHandler.new(1,2306082057,'number of arguments is different')
        return False

    def standard_delete(self, table:str, where_fields:tuple[str]=[], where_values:tuple=() ) -> bool:
        if( len(where_fields) == len(where_values)):
            try:
                pwhere = ' AND '.join([f'{item}=?' for item in where_fields])
                self.query(f'DELETE FROM {table} WHERE {pwhere}', where_values)
                return True
            except Exception as e:
                LogHandler.new(1,2306131941,'impossible delete table entries: ' + str(e))
        else:
            LogHandler.new(1,2306131940,'number of arguments is different')
        return False
    
    @staticmethod
    def getCommon():
        if Database.__comminDatabase is not None:
            return Database.__comminDatabase
        else:
            LogHandler.new(1,2306081943,'Attempt to retrieve common database before instantiate this')