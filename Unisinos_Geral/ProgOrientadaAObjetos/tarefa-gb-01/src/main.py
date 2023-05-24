from PySide6.QtCore import Qt
from PySide6.QtWidgets import QApplication, QMainWindow, QLabel, QPushButton, QVBoxLayout, QWidget

class Counter(QMainWindow):
    def __init__(self):
        super().__init__()

        self.counter = 0

        self.label = QLabel(str(self.counter))
        self.button = QPushButton("Clique Aqui")
        self.button.clicked.connect(self.count)

        layout = QVBoxLayout()
        layout.addWidget(self.label, alignment=Qt.AlignCenter)
        layout.addWidget(self.button, alignment=Qt.AlignCenter)

        central_widget = QWidget()
        central_widget.setLayout(layout)
        self.setCentralWidget(central_widget)

    def count(self):
        self.counter += 1
        self.label.setText(str(self.counter))

if __name__ == "__main__":
    app = QApplication([])

    window = Counter()
    window.show()

    app.exec()
