const { Router } = require('express')
const LocaisController = require('../controller/locais.controller')
const validateToken = require('../middlewares/ValidateToken')

const locaisRoutes = new Router()


locaisRoutes.post('/', validateToken, LocaisController.createLocal)
locaisRoutes.get('/:id', validateToken, LocaisController.listLocal)


locaisRoutes.delete('/:id', validateToken, LocaisController.deleteLocal)
locaisRoutes.put('/:id', validateToken, LocaisController.updateLocal)
locaisRoutes.get('/', validateToken, LocaisController.listLocais)




module.exports = locaisRoutes