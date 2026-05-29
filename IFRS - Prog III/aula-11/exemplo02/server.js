const express = require('express');

const app = express();


// Cria um Middleware
app.use((req, res, next) =>
 {
    //obter dados do header, por exemplo
    const info = req.headers.info;// lê um header "info", que supostamente existe
    const num = req.headers.num; //mesma coisa
    console.log(`Recebidos os headers: ${info} e ${num}`);

    next();//segue pro próximo
});

// Cria um segundo Middleware... você pode ter quantos quiser
app.use((req,res,next) => {

    //obter os dados da query string (params da URL)
    const nome = req.query.nome;
    const cidade = req.query.cidade;

    //obter dados do body, por exemplo
    const marca = req.body.marca;
    const modelo = req.body.modelo;

    res.send(`<h1>Olá, ${nome} de ${cidade}</h1>`);
});


app.listen(3000);
console.log('Servidor rodando...');