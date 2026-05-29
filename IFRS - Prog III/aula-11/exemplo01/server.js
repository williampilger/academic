const http = require("http");

const server = http.server(
    (req, res) => {
        console.log("Chegou uma requisição: ", req.method);
        res.write("isso é uma resposta");
        res.end()
    }
)

server.listen()
console.log("O servidor está rodando");