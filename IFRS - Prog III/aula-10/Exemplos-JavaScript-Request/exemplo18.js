// exemplo18.js
// Tratamento de erro com catch
// JSON inexistente

fetch('http://localhost:5500/carro.json')
    .then(response => {
        if(response.status < 200 || response.status >= 300) {
            // Se comentar a linha abaixo, verá que o erro será gerado pela
            // instrução response.json();
            throw new Error(`ERRO - Status: ${response.status}.`);
        }
        console.log('Não chegou aqui.');
        return response.json();
    }).then( data => {
        console.log(data)
    }).catch( error => {
        console.log('Caiu no catch().');
        console.log(error);
    })
