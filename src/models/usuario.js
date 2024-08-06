const { DataTypes } = require('sequelize')
const conection = require('../database/connections')
const {hashSync} = require('bcryptjs')
const Permissao = require('./permissao')
const UsuarioPermissoes = require('./usuarioPermissao')


const Usuario = conection.define('usuarios', {
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


Usuario.belongsToMany(Permissao, {through: UsuarioPermissoes,
     foreignKey: 'usuario_id',    
     otherKey: 'usuario_id'
})


// Permissao.belongsToMany(Usuario, {
//     through: UsuarioPermissoes,
//     foreignKey: 'permissao_id',
//     // otherKey: 'usuario_id'
// });





// Permissao.hasMany(Usuario)   

Usuario.beforeSave((user) => {
    user.password_hash = hashSync(user.password_hash, 10)  // or await hash 
    return user
   })


module.exports = Usuario