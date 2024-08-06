const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
const Usuario = require('../models/usuario')
const LocalDeColeta = require('../models/localDeColeta')




class LocaisController {


    // criar novo local de coleta

    async createLocal(request, response) {
        try {
            const data = request.body
            const usuario = request.userId

            if(!data.name) {
                return response.status(400).json({mensagem: 'O nome do local de coleta é obrigatorio'})
            }
    
            if(!data.address) {
                return response.status(400).json({message: 'O endereço do local de coleta é obrigatorio'})
            }

            const local = await LocalDeColeta.create({
                ...data,
                user_id: usuario
            })
    
            response.status(201).json({
                name: local.name,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })


        } catch (error) {
            console.log(error)
            response.status(500).json({message: "Falha ao conectar ao banco de dados."})

        }    
    }



    // listar todos os locais de coleta cadastrados:

    async listLocais(request, response) {
        try {
            const Locais = await LocalDeColeta.findAll({
                include : [
                    {
                        model: Usuario,
                        attributes: ['id', 'name'],
                    }
                ]
            })
            response.status(200).json(Locais)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Erro ao listar todos os Locais de coleta",})
        }
    }



    // deletar local de coleta usando id, somente deleta locais de coleta cadastrado pelo usuario logado:


    async deleteLocal(request, response) {
        try {
            const localId = request.params.id
            const usuario = request.userId
            const local = await LocalDeColeta.findByPk(localId)

            if (!local) {
                return response.status(404).json({mensagem: `Local de coleta com ID: ${localId}, não encontrado`})
            }

            await local.destroy({
                where: {
                    id: usuario
                }
            })

            response.status(204).json()

        } catch (error) {
            console.error(error);
            response.status(500).json({message: 'Erro ao tentar deletar o local de coleta'})
        }
    }


    // atualizar local de coleta, somente atualizar locais de coleta cadastrados pelo usuario:

    async updateLocal(request, response) {
        try {
            const id = request.params.id;
            const data = request.body;
            const usuarioId = request.userId; 
            const local = await LocalDeColeta.findByPk(id);
    
            if (!local) {
                return response.status(404).json({ mensagem: "Local de coleta não encontrado" });
            }
    
            if (local.usuario_id !== usuarioId) {
                return response.status(403).json({ mensagem: "Não tem acesso para editar este local de coleta" });
            }
    
            if (data.email && data.email !== local.email) {
                const emailExist = await LocalDeColeta.findOne({
                    where: {
                        email: data.email
                    }
                });
    
                if (emailExist) {
                    return response.status(409).json({ message: "O endereço de e-mail já está registrado. Por favor, use um e-mail diferente." });
                }
            }
    
            if (!(data.password?.length >= 8 && data.password?.length <= 16)) {
                return response.status(400).json({ message: "Senha deve ter entre 8 e 16 caracteres. Por favor, insira uma senha válida." });
            }
    
            await local.update({
                name: data.name || local.name,
                email: data.email || local.email,
                password_hash: data.password || local.password_hash
            });
    
            response.status(200).json({ mensagem: "Local de coleta atualizado com sucesso", local });
    
        } catch (error) {
            console.error(error);
            response.status(500).json({ mensagem: 'Erro ao atualizar o local de coleta' });
        }
    }



    // listar todos os locais de coleta cadastrados pelo usuario logado:

    async listLocais(request, response) {
        try {
            const usuario = request.userId
            const Locais = await LocalDeColeta.findAll({
                where :{
                    user_id: usuario
                },
                include : [
                    {
                        model: Usuario,
                        attributes: ['id', 'name'],
                    }
                ]
            })
            response.status(200).json(Locais)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Erro ao listar todos os Locais de coleta",})
        }
    }



    // listar qualquer local de coleta pelo id:


    async listLocal(request, response) {
        try {
            const id = request.params.id
            const local = await LocalDeColeta.findByPk(id)

            if (!local) {
                return response.status(404).json({
                    mensagem: `Usuário com ID: ${id}, não encontrado`
                })
            }

            response.status(200).json(local)

        } catch (error) {
            console.error(error)
            response.status(500).json({mensagem: 'Erro ao tentar listar o usuário'})
        }
    }


}

module.exports = new LocaisController()