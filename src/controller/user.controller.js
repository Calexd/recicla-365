const regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
const User = require('../models/user')




class userController {


    // criar novo usuário:

    async createAccount(request, response) {
        try {
            const data = request.body

            if(!data.name) {
                return response.status(400).json({mensagem: 'O nome é obrigatorio'})
            }
    
            if(!data.email) {
                return response.status(400).json({message: 'O email é obrigatorio'})
            }
    
            if(regexEmail.test(data.email) === false) {
                return response.status(400).json({message: "Formato de e-mail inválido. Por favor, insira um endereço de e-mail válido."})
            }
    
            if(!(data.password?.length >= 8 && data.password?.length <=16)){
                return response.status(400).json({message: "Senha deve ter entre 8 e 16 caracteres. Por favor, insira uma senha válida."})
            }
    
            const userExist = await User.findOne({
                where: {
                    email: data.email
                }
            })
    
            if(userExist) {
                return response.status(409).json({message: "O endereço de e-mail já está registrado. Por favor, use um e-mail diferente."})
            }
    
            const user = await User.create({
                ...data,
                password_hash: data.password
            })
    
            response.status(201).json({
                name: user.name,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            })


        } catch (error) {
            console.log(error)
            response.status(500).json({message: "Falha ao conectar ao banco de dados."})

        }    
    }



    // listar todos os usuários cadastrados:

    async listUsers(request, response) {
        try {
            const Users = await User.findAll()
            response.status(200).json(Users)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Erro ao listar todos os Usuarios",})
        }
    }

    // deletar usuário cadastrado pelo id:


    async deleteUser(request, response) {
        try {
            const userId = request.params.id
            const user = await User.findByPk(userId)

            if (!user) {
                return response.status(404).json({mensagem: `Usuário com ID: ${userId}, não encontrado`})
            }

            await user.destroy()
            response.status(204).json()

        } catch (error) {
            console.error(error);
            response.status(500).json({message: 'Erro ao tentar deletar o usuário'})
        }
    }


    // atualizar usuário:

    async updateUser(request, response) {
        try {
            const id = request.params.id
            const data = request.body
            const user = await User.findByPk(id)

            if (!user) {
                return response.status(404).json({mensagem: "Usuário não encontrado"})
            }

            if (data.email && data.email !== user.email) {
                const emailExist = await User.findOne({
                    where: {
                        email: data.email
                    }
                });
            
                if (emailExist) {
                    return response.status(409).json({ message: "O endereço de e-mail já está registrado. Por favor, use um e-mail diferente." });
                }
            }

            if(!(data.password?.length >= 8 && data.password?.length <=16)){
                return response.status(400).json({message: "Senha deve ter entre 8 e 16 caracteres. Por favor, insira uma senha válida."})
            }
    

            await user.update({
                name: data.name || user.name,
                email: data.email || user.email,
                password_hash: data.password

            })

            response.status(200).json({mensagem: "Usuário atualizado com sucesso", user: user})


        } catch (error) {
            console.error(error)
            response.status(500).json({mensagem: 'Erro ao atualizar o usuário',})
        }
    }

    // listar usuário pelo id:


    async listUser(request, response) {
        try {
            const id = request.params.id
            const user = await User.findByPk(id)

            if (!user) {
                return response.status(404).json({
                    mensagem: `Usuário com ID: ${id}, não encontrado`
                })
            }

            response.status(200).json(user)

        } catch (error) {
            console.error(error)
            response.status(500).json({mensagem: 'Erro ao tentar listar o usuário'})
        }
    }


}

module.exports = new userController()