const { request } = require("express")
const Usuario = require("../models/usuario")
const Permissao = require("../models/permissao")

const verificarPermissao = (permisoesRequeridas) => {
    return async (request, response, next) => {
        try{
            const { userId } = request
            const usuario = await Usuario.findByPk(userId, {
                include: {
                    Permissao,
                    through: {
                    attriibutes: []
                }
                }
            });

            const permissoesUsuario = usuario.permissoes.map(p => p.description)
            const temPermissao = permisoesRequeridas.every(permissao => permissoesUsuario.includes(permissao))

            if (!temPermissao) {
                return response.status(401).json({menssagem: 'Usuário nãõ tem uma ou mais permissoões'})
            }

            next()
        } catch (error) {
            return response.status(401).json({ mensagem: 'Usuário não tem uma ou mais permissões'})
        }
    }
}

module.exports = verificarPermissao
