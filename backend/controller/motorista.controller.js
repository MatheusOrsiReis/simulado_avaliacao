const Motorista = require('../models/Motorista')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res) =>{
    const valores = req.body

    if(!valores.nome || !valores.cnh || !valores.cpf ||!valores.telefone){
        return res.status(404).json({message:'todos os campos são obrigatórios'})
    }

    if(valores.cpf =! 11){
        return res.status(404).json({message:'CPF inválido!'})
    }

    const cnhCriptografada = CryptoJS.AES.encrypt(valores.cnh, CHAVE_SECRETA).toString()
    const cpfCriptografado = CryptoJS.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()

    try{
       await Motorista.create({
        nome: valores.nome,
        cnh: cnhCriptografada,
        cpf: cpfCriptografado,
        telefone: valores.telefone

       })

       console.log('dados cadastrados com sucesso!')
       return res.status(201).json({message: 'dados cadastrados com sucesso!'})
    }catch(err){
        console.error('erro ao cadastrar',err)
        return res.status(400).json({message: 'erro ao cadastrar'})
    }   
}

const apagar =  async(req,res) =>{
    const id = req.params.id
    
    try{
        await Motorista.destroy({where:{codMotorista:id}})
        console.log('apagado com sucesso!')
        return res.status(201).json({message: 'dados apagados com sucesso!'})
    }catch(err){
        console.error('erro ao apagar',err)
        return res.status(400).json({message: 'erro ao apagar'})
    }
}

const consultar = async (req, res) => {
    const id = req.params.id
    try {
        const motorista = await Motorista.findByPk(id)
        if (!motorista) {
            return res.status(404).json({ message: 'Motorista não encontrado!' })
        }
        return res.status(200).json(motorista)
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao consultar motorista!' })
    }
}

const listar = async(req,res) =>{
    try{
        const motorista = await Motorista.findAll()
        return res.status(200).json(motorista)
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao listar motoristas!' })
    }
}


module.exports = {cadastrar, apagar, consultar, listar}

