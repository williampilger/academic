import './App.css'
import { Header } from './_components/header'
import { Photo } from './_components/Photo'
import { PhotoShild } from './_components/PhotoShild'
import { Contador } from './_components/contador'
import { InputCampo } from './_components/InputCampo'
import { Botao, BotaoComRetorno } from './_components/Botao'
import { ListaPresenca } from './_components/listaPresenca'
import { BotaoMostrar } from './_components/BotaoMostrar'
import { BotaoFlipFlop } from "./_components/botaoFlipFlop"
import * as C from './_components/Styled_BotoesGerais'
import { FormNome } from './_components/formNome'
import { Cinema } from './_components/cinema'
import { Blog } from './_components/Blog'
import { Blog_comAxios } from './_components/Blog_comAxios'
import { contadorReducer } from './_components/contadorReducer'

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
                    <span>Exemplo de requisição eget/post a um servidor externo (sem AXIOS):</span>
                    <hr />
                    <Blog/>
                </div>

                <div>
                    <span>Exemplo de requisição eget/post a um servidor externo (sem AXIOS):</span>
                    <hr />
                    <Blog_comAxios/>
                </div>

                <div>
                    <span>Exemplo de componente com Reducer</span>
                    <hr />
                    <contadorReducer/>
                </div>
            </div>
        </div>
    );
}

export default App
