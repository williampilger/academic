import './App.css'
import { Header } from './components/header'
import { Photo } from './components/Photo'
import { PhotoShild } from './components/PhotoShild'
import { Contador } from './components/contador'
import { InputCampo } from './components/InputCampo'
import { Botao, BotaoComRetorno } from './components/Botao'
import { ListaPresenca } from './components/listaPresenca'
import { BotaoMostrar } from './components/BotaoMostrar'
import { BotaoFlipFlop } from "./components/botaoFlipFlop"
import * as C from './components/Styled_BotoesGerais'
import { FormNome } from './components/formNome'
import { Cinema } from './components/cinema'
import { Blog } from './components/Blog'

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

                <ListaPresenca/>

                <BotaoMostrar/>

                <BotaoFlipFlop />

                <div>
                    <C.BotaoArredondado>Styled Botão arredondado</C.BotaoArredondado>
                    <C.Campo>
                        <span>Diminua a janela até este componente não caber</span>
                        <C.BotaoQuadrado bg="#FF0000">Styled Botão quadrado vermelho</C.BotaoQuadrado>
                        <C.BotaoQuadrado bg="#00FF00" small>Styled Botão quadrado Verde Pequeno</C.BotaoQuadrado>
                    </C.Campo>
                </div>

                <div>
                    <p>Usando o <strong>TailWindCSS</strong> para montar páginas.</p>
                    
                    <span className='bg-red-500'>Texto estilizado com TailWind</span>
                    <button className='bg-green-700 m-3 rounded'>Botão arredondado</button>

                    <div className='bg-blue-300 flex flex-col md:flex-row'>
                        <span>Esta é uma DIV responsiva feita com <strong>TailWindCSS</strong>.</span>
                        <button className='bg-green-700 hover:bg-green-900 hover:text-white m-3 rounded'>Botão arredondado</button>
                        <button className='bg-green-700 hover:bg-red-300 m-3 rounded'>Botão arredondado</button>
                        <button className='bg-green-700 hover:p-5 m-3 rounded'>Botão arredondado</button>
                        <button className='bg-green-700 hover:bg-blue-200  m-3 rounded'>Botão arredondado</button>
                        <button className='bg-green-700 hover:bg-black hover:text-white m-3 rounded'>Botão arredondado</button>
                    </div>
                </div>

                <FormNome/>

                <div>
                    <span>Este é um exemplo de requisição de dados externos:</span>
                    <hr />
                    <Cinema/>
                </div>

                <div>
                    <span>Exemplo de requisição e post a um servidor externo:</span>
                    <hr />
                    <Blog/>
                </div>

            </div>
        </div>
    );
}

export default App
