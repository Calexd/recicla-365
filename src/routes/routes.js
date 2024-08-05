const { Router } = require('express')


const userRoutes = require('./user.routes')
const loginRoutes = require('./login.routes')
const locaisRoutes = require('./locais.routes')
const permissoesRoutes = require('./permissao.routes')
const validateToken = require('../middlewares/ValidateToken')


const routes = new Router()


routes.use('/permissoes', validateToken, permissoesRoutes)

routes.use('/locais', locaisRoutes)
routes.use('/users', userRoutes)
routes.use('/login', loginRoutes)

module.exports = routes

