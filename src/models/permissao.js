const { DataTypes } = require('sequelize');
const connection = require('../database/connections');
const Usuario = require('./usuario');
const UsuarioPermissoes = require('./usuarioPermissao');

const Permissao = connection.define('permissoes', {
    description: {
        type: DataTypes.STRING,
    },
}, {
    paranoid: true // (deletedAt require if parainoid is true)
});


module.exports = Permissao;