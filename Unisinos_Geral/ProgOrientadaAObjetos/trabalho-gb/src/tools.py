
class LogHandler:

    __log_types = ['WARNING', 'ERROR', 'NOTE']

    @staticmethod
    def new( type:int, code:int, value:str):
        print(f'{LogHandler.__log_types[type]}_{code} - {value}')