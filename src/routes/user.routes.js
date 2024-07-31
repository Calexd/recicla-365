const { Router } = require('express')
const UserController = require('../controller/user.controller')
const validateToken = require('../middlewares/ValidateToken')

const userRoutes = new Router()


userRoutes.post('/', UserController.createAccount)
userRoutes.get('/:id', UserController.listUser)


userRoutes.delete('/:id', validateToken, UserController.deleteUser)
userRoutes.put('/:id', validateToken, UserController.updateUser)
userRoutes.get('/', validateToken, UserController.listUsers)




module.exports = userRoutes