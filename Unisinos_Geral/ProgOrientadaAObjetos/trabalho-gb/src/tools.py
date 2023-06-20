
class LogHandler:

    __log_types = ['WARNING', 'ERROR', 'NOTE']

    @staticmethod
    def new( type:int, code:int, value:str):
        print(f'{LogHandler.__log_types[type]}_{code} - {value}')

import random
import string
def get_random_string(length):
    # choose from all lowercase letter
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    print("Random string of length", length, "is:", result_str)
    return result_str

def anti_injection( content ):
    ##Aqui tratar o anti injection
    return content