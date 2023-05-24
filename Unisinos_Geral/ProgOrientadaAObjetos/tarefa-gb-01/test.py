import sys
from PySide6.QtWidgets import QApplication, QLabel

app = QApplication([])
label = QLabel("Hello, PySide!")
label.show()
sys.exit(app.exec())

