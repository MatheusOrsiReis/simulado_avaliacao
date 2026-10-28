const Funcionario = require('../models/Funcionario')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res) =>{
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha){
        return res.status(404).json({message:'todos os campos são obrigatórios'})
    }

    if(valores.cpf =! 11){
        return res.status(404).json({message:'CPF inválido!'})
    }

    const senhaCriptografada = CryptoJS.AES.encrypt(valores.senha, CHAVE_SECRETA).toString()

    try{
       await Funcionario.create({
        nome: valores.nome,
        email: valores.email,
        senha: senhaCriptografada
       })

       console.log('dados cadastrados com sucesso!')
       return res.status(201).json({message: 'dados cadastrados com sucesso!'})
    }catch(err){
        console.error('erro ao cadastrar',err)
        return res.status(400).json({message: 'erro ao cadastrar'})
    }   
}


module.exports = {cadastrar}
