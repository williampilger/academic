fetch('http://localhost:5500/pessoa.json')
    .then(response => {
        return response.json();
    }).then( data => {
        console.log(data)
    });

/*
  Explorando a aba Network do Chrome
- Certifique-se que você está usando o Chrome.
- Abra as Ferramentas do Desenvolvedor CTRL + Shift + I.
- Clique na aba Network.
- Inicie a gravação clicando no círculo cinza mais a esquerda ou então  
  usando o atalho CTRL + E.
- Realize um Reload da página HTML.
- Pare a gravação clicando no círculo vermelho mais a esquerda ou en-tão 
  usando o atalho CTRL + E.
- Para cada um dos arquivos, analise os dados em cada uma das 
  abas Headers, Preview, Response, Initiator e Timing. 

  VER AS IMAGENS DOS SLIDES
*/
