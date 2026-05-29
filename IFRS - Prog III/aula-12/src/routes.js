import { Router } from "express"
import carroController from "./controllers/carroController"

const routes = new Router()

// Aqui eu defino as minhas rotas
routes.get("/ola", (req, res, next) =>{

    const msg = {
        mensagem: "Olá Mundo!"
    }

    res.send(msg)
})

routes.get('/carros', carroController.index);

export default routes