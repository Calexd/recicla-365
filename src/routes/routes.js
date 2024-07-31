const { Router } = require('express')


const userRoutes = require('./user.routes')
const loginRoutes = require('./login.routes')


const routes = new Router()




routes.use('/users', userRoutes)
routes.use('/login', loginRoutes)







module.exports = routes

// const usuariosRoutes = require('./users.routes')
// const validateToken = require('../middlewares/validateToken')


// const LoginController = require('../controllers/LoginController')


// const productRoutes = require('./product.routes')
// const ordersRoutes = require('../orders')


// routes.use('/clients', clientsRoutes)
// routes.use('/orders', ordersRoutes) 


// user Routes: 

// routes.use('/users', usuariosRoutes)


// login Routes: 

// routes.post('/login', LoginController.login)


//product routes

// routes.use(validateToken)
// routes.use('/products', productRoutes)
