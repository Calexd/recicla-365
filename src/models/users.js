const { DataTypes } = require('sequelize')
const conection = require('../database/connections')
// const { password } = require('../config/database.config')
const {hashSync} = require('bcryptjs')


const Client = conection.define('users', {
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    paranoid: true // (deletedAt require if parainoid is true)
})


module.exports = Client