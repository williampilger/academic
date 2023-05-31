try:
    from PySide6.QtCore import Qt
    from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton, QVBoxLayout, QHBoxLayout, QWidget
except:
    print("Você precisa ter instaladas as dependências: PySide6")
    try:
        import multiplat as mp
        opcao = input("Deseja instalar automaticamente(N/y)?: ")
        if(opcao=='Y' or opcao=='y'):
            mp.install_lib('PySide6')
            mp.restart_program()
    except:
        print("Não é possível instalar automaticamente.")
    print("Finalizado")
    exit()


class Information(QHBoxLayout):
    def __init__(self, key:str, value:str=""):
        super().__init__()
        
        label = QLabel(f"{key}: ")

        self._value = QLineEdit(value)

        self.addWidget(label)
        self.addWidget(self._value)
    
    def getValue(self):
        return self._value


class People():
    def __init__(self):
        super().__init__()

        self.show()

    # Retorna um componente para exibir o Cadastro em uma lista
    def getDisplayer(self):

        layout = QHBoxLayout()
        return 
    
    # Abre uma nova janela para edição do cadastro
    def getEditor(self, save_callback:object, remove_callback:object):
        
        def onclick_btn_remove(self):
            remove_callback
        btn_remove = QPushButton("Excluir Cadastro")
        btn_remove.clicked.connect(onclick_btn_remove)
        
        def onclick_btn_save(self):
            #Salvar aqui
            save_callback
        btn_save = QPushButton("Salvar Cadastro")
        btn_save.clicked.connect(onclick_btn_save)

        layout = QVBoxLayout()
        layout.addLayout(Information("Nome", self._name))
        layout.addLayout(Information("Endereço", self._addr))
        layout.addLayout(Information("Email", self._email))
        layout.addLayout(Information("Data nasc.", self._bd))
        layout.addWidget(btn_save)
        layout.addWidget(btn_remove)

        central_widget = QWidget()
        central_widget.setLayout( layout )

        # https://www.pythonguis.com/tutorials/pyside6-creating-multiple-windows/
        popup_window = QWidget()
        popup_window.setCentralWidget(central_widget)
        popup_window.show()

        
        



class MDI(QMainWindow):
    def __init__(self):
        super().__init__()

        teste = People()
        teste.getEditor(self.save_people, self.remove_people)

        # self.list_layout = QVBoxLayout()
        # self.list_layout.addLayout(  )

        # self.main_layout = QVBoxLayout()
        # self.main_layout.addLayout(self.list_layout)

        # central_widget = QWidget()
        # central_widget.setLayout(self.main_layout)
        # self.setCentralWidget(central_widget)


    def remove_people(self, item):
        pass

    def add_people(self, key_name:str):
        pass

    def save_people(self, people):
        pass


if __name__ == "__main__":
    app = QApplication([])
    window = MDI()
    window.show()
    app.exec()
