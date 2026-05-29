class CarroController{

    async index(req,res){
        return res.send({mensagem:'index'})
    }
}

export default new CarroController;