const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Entrega = db.define('entrega',{
    codEntrega:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cidadeDestino:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora:{
        type: DataTypes.TIME,
        allowNull: false
    },
    idCarga:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            key: 'codCarga',
            model: 'cargas'
        }
    }

},{
    tableName: 'entregas',
    timestamps: false
})

module.exports = Entrega