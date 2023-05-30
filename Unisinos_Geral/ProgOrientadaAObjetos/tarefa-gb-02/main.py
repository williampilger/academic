try:
    from PySide6.QtCore import Qt
    from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QLineEdit, QPushButton, QVBoxLayout, QWidget
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



class Counter(QMainWindow):
    def __init__(self):
        super().__init__()
        
        self.input = QLineEdit("Inform your name")

        self.button = QPushButton("Confirm")
        self.button.clicked.connect(self.onclick_btn_confirm)

        layout = QVBoxLayout()
        layout.addWidget(self.input)
        layout.addWidget(self.button)

        central_widget = QWidget()
        central_widget.setLayout(layout)
        self.setCentralWidget(central_widget)

        self.label = QLabel("test")

    def onclick_btn_confirm():
        self.label = QLabel(f"Heloo {self.}")

if __name__ == "__main__":
    app = QApplication([])

    window = Counter()
    window.show()

    app.exec()
