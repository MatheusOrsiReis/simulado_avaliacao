const {Funcionario, Motorista, Carga, Entrega} = require('./models/rel')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force:true})
        console.log('conectando tabelas')
    }catch{
        console.error('erro ao conectar as tabelas',err)
    }finally{
        await conn.close()
        console.log('fechando a conexão')
    }
}

syncDataBase()