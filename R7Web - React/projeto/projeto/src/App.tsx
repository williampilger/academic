import './App.css'
import { Header } from './components/header'
import { Photo } from './components/Photo'
import { PhotoShild } from './components/PhotoShild'
import { Contador } from './components/contador'
import { InputCampo } from './components/InputCampo'
import { Botao, BotaoComRetorno } from './components/Botao'


function App() {

    const botaoClick = () => {
        alert("Um botão foi clicado!");
    }

    const botaoCliclComFrase = (txt: string) => {
        alert("O conteúdo que veio do botão é: " + txt);
    }

    return (
        <div>
            <Header titulo="Minha primeira Página"/>
            Este é um texto simples (mesma coisa que um span)
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

                <Contador/>

                <InputCampo />

                <Botao text='Crie um alerta' clickfn={botaoClick}/>

                <BotaoComRetorno text='Crie um alerta com retorno de conteúdo' clickfnComTexto={botaoCliclComFrase} />

            </div>
        </div>
    );
}

export default App
