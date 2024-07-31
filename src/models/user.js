const { DataTypes } = require('sequelize')
const conection = require('../database/connections')
// const { password } = require('../config/database.config')
const {hashSync} = require('bcryptjs')


const User = conection.define('users', {
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    paranoid: true // (deletedAt require if parainoid is true)
})



User.beforeSave((user) => {
    user.password_hash = hashSync(user.password_hash, 10)  // or await hash 
    return user
   })


module.exports = User