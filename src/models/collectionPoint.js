const { DataTypes } = require('sequelize')
const conection = require('../database/connections')

const CollectionPoints = conection.define('collection_points', {
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    latitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false,
    }, 
    longitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: false,
    }, 
}, {
    paranoid: true // (deletedAt require if parainoid is true)
})

module.exports = CollectionPoints