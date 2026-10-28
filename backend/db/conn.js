const {Sequelize} = require('sequelize')

const db = new Sequelize('db_logistica', 'root', 'senai',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

db.authenticate()
.then(()=>{
    console.log('conectado com sucesso!')
})
.catch((err)=>{
    console.error('erro na conexão com o banco')
})

module.exports = db