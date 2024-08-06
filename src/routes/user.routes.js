const { Router } = require('express')
const UserController = require('../controller/user.controller')
const validateToken = require('../middlewares/ValidateToken')
const verificarPermissao = require('../middlewares/verificarPermissao')

const userRoutes = new Router()


userRoutes.post('/', UserController.createAccount
    /*
    #swagger.tags = ['Usuários']
*/
)
userRoutes.get('/:id', UserController.listUser
       /*
    #swagger.tags = ['Usuários']
*/
)


userRoutes.delete('/:id', validateToken, verificarPermissao(['admin']), UserController.deleteUser
   /*
    #swagger.tags = ['Usuários']
*/)
userRoutes.put('/:id', validateToken, UserController.updateUser
       /*
    #swagger.tags = ['Usuários']
*/
)
userRoutes.get('/', validateToken, UserController.listUsers
       /*
    #swagger.tags = ['Usuários']
*/
)




module.exports = userRoutes