import './App.css'
import { Header } from './components/header'
import { Photo } from './components/Photo'
import { PhotoShild } from './components/PhotoShild'

function App() {
    return (
        <div>
        <Header titulo="Minha primeira Página"/>
        <span>Esta é um texto</span>
        <div>
            <div>
                <h5>Este é um exemplo de componente</h5>
                <Photo url='https://www.google.com/google.jpg' alt='Google' legend='Essa é a logo do Google!'/>
            </div>
            <div>
                <h5>Este é outro, com o resultado exatamente igual:</h5>
                <PhotoShild legend='Essa é a logo do Google!'>
                    <img src="https://www.google.com/google.jpg" alt="Google" />
                </PhotoShild>
            </div>
            
        </div>
        </div>
    );
}

export default App
