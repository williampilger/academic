import { Router } from "express"
import carroController from "./controllers/carroController.js"

const routes = new Router()

// Aqui eu defino as minhas rotas
routes.get("/ola", (req, res, next) =>{

    const msg = {
        mensagem: "Olá Mundo!"
    }

    res.send(msg)
})

routes.get('/carros', carroController.index);
routes.get('/carro', carroController.show);
routes.post('/carro', carroController.store);
routes.put('/carro/:placa', carroController.update);
routes.delete('/carro/:placa', carroController.destroy);

export default routes