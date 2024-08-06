const Permissao = require("../models/permissao")
const Usuario = require('../models/usuario')


class PermissaoController {
    async createPermissao(request, response) {
        try {
            const {descricao} = request.body
            const permissao = await Permissao.create({description: descricao})
            response.status(201).json(permissao)
        } catch (error) {
            response.status(500).json({ mensagem: 'Houve um erro ao cadastrar a permissao' })
            console.log('erro:', error)
        }
    }

    async deletePermissao(request, response) {
        try {
            const id = request.params.id
            const permissao = await Permissao.findByPk(id)

            if(!permissao) {
                response.status(404).json({mensagem: 'Não foi encotrada a permissão'})
            }

            await permissao.destroy()
            response.status(204).json()
        } catch (error) {
            console.error(error);
            response.status(500).json({message: 'Erro ao tentar deletar a permissão'})
        }
    }

    async listarPermissoes(request, response) {
        try {
            const permissoes = await Permissao.findAll()
            response.json(permissoes)
        } catch (error) {
            response.status(500).json({message: 'Erro ao tentar listar as permissões'})

        }
    }


    async atribuirPermissao(request, response) {
        try {
            const { usuario_id, permissao_id } = request.body

            const usuario = await Usuario.findByPk(usuario_id)
            const permissao = await Permissao.findByPk(permissao_id)

            if (!usuario || !permissao){
                response.status(404).json({mensagem: 'Usuário ou permissão não encontrados'})
            }

            console.log(usuario)
            console.log(permissao)

            await usuario.addPermissoes(permissao)

            response.status(204).json()

        } catch (error) {
            console.log('error:', error)
            response.status(500).json({mensagem: 'Houve um erro ao atribuir permissão ao usuário'})
        }
    }
}

module.exports = new PermissaoController()