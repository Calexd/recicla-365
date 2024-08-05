const { DataTypes } = require('sequelize')
const conection = require('../database/connections')
const Usuario = require('./usuario')

const LocalDeColeta = conection.define('locais_coleta', {
    name: {
        type: DataTypes.STRING(150),
    },
    address: {
        type: DataTypes.TEXT,
    },
    usuario_id: {
        type: DataTypes.INTEGER,
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8),
    }, 
    longitude: {
        type: DataTypes.DECIMAL(10, 8),
    }, 
}, {
    paranoid: true // (deletedAt require if parainoid is true)
})


LocalDeColeta.belongsTo(Usuario, {
    foreignKey: 'usuario_id'

})



module.exports = LocalDeColeta