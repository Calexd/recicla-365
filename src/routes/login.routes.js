const { Router } = require('express')
const LoginController = require('../controller/login.controller')

const userRoutes = new Router()



userRoutes.post('/', LoginController.login
    /*
    #swagger.tags = ['Login']
*/
)





module.exports = userRoutes