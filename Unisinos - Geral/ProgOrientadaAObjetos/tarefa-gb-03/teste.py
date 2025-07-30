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
    def __init__(self, key:str, value:str, distruct_callback:object):
        super().__init__()
        
        self.distruct_callback = distruct_callback

        label = QLabel(f"{key}: ")

        self._value = QLineEdit(value)

        self.button = QPushButton("Remover")
        self.button.clicked.connect(self.onClick_btnRm)

        self.addWidget(label)
        self.addWidget(self._value)
        self.addWidget(self.button)
    
    def onClick_btnRm(self):
        self.distruct_callback(self)


class MDI(QMainWindow):
    def __init__(self):
        super().__init__()
        
        sample = Information('Teste', 'hmmm', self.remove_information)

        self.list_layout = QVBoxLayout()
        self.list_layout.addLayout(sample)

        adder = Adder(self.add_information)

        self.main_layout = QVBoxLayout()
        self.main_layout.addLayout(self.list_layout)
        self.main_layout.addLayout(adder)

        central_widget = QWidget()
        central_widget.setLayout(self.main_layout)
        self.setCentralWidget(central_widget)



    def remove_people(self, item):
        self.list_layout.removeItem(item)
        del item
        # print(dir(self.list_layout))

    def add_people(self, key_name:str):
        item = Information(key_name, '',self.remove_people)
        self.list_layout.addLayout(item)


if __name__ == "__main__":
    app = QApplication([])
    window = MDI()
    window.show()
    app.exec()
