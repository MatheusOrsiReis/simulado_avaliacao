const express = require('express')
const app = express()
const cors = require('cors')

const funcionarioController = require('./controller/funcionario.controller')
const motoristaController = require('./controller/motorista.controller')
const cargaController = require('./controller/carga.controller')

const conn = require('./db/conn')
const hostname = 'localhost'
const PORT = 3000

//================ MIDDLEWARE ===================
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//================ ROTAS ========================
//Funcionario
app.post('/funcionario', funcionarioController.cadastrar)

//Motorista
app.post('/motorista', motoristaController.cadastrar)
app.delete('/motorista/:id', motoristaController.apagar)
app.get('/motorista/:id', motoristaController.consultar)
app.get('/motoristas', motoristaController.listar)

//Carga
app.post('/carga', cargaController.cadastrar)


app.get('/', (req,res)=>{
    console.log('aplicação rodando!')
})

//============= SERVER ============================
conn.sync()
.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`servidor rodando em http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('erro ao conectar com servidor')
})