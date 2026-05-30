import * as Yup from 'yup';

let carros = [
    {
        placa: 'ITO-6230',
        modelo: 'Polo',
        ano: 2012
    },
    {
        placa: 'IRO-6302',
        modelo: 'Corolla',
        ano: 2022
    },
    {
        placa: 'JBN-6302',
        modelo: 'Virtus',
        ano: 2025
    }
]

class CarroController{

    async index(req,res){
        return res.send({mensagem:'index'})
    }

    async show(req,res){

        const {placa} = req.query;

        if(!placa) return res.status(400).send({msg:'placa is required'});

        const carro = carros.find( c => c.placa===placa );

        if(!carro) return res.status(404).send({msg:'not found'})
             
        return res.send(carro)
    }

    async store(req,res){
        const carro = req.body;

        carros.push(carro);

        return res.send(carro);
    }

    async update(req,res){
        const carro = req.body;

        const {placa} = req.params;

        const i = carros.findIndex( c => c.placa===placa );
        if(i<0) return res.status(404).send({msg:'not found'});

        const shema = Yup.object().shape({
            placa: Yup.string().notNullable().required(),
            modelo: Yup.string().notNullable().required(),
            ano: Yup.number().notNullable().required().min(1900).max(new Date().getFullYear())
        });

        if( await schema.isValid(carro) ){
            carros.splice(i,1,carro);    
            return res.json();
        }

        return res.status(400).send({msg:'validation fails'})

    }

    async destroy(req,res){
        const {placa} = req.params;

        const i = carros.findIndex( c => c.placa===placa );

        if(i<0) return res.status(404).send({msg:'not found'});

        carros.splice(i,1);

        return res.json()
    }
}

export default new CarroController;