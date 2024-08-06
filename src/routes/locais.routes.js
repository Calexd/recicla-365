const { Router } = require('express')
const LocaisController = require('../controller/locais.controller')
const validateToken = require('../middlewares/ValidateToken')

const locaisRoutes = new Router()


locaisRoutes.post('/', validateToken, LocaisController.createLocal

/*
    #swagger.tags = ['Locais de coleta']
    #swagger.description = "Endpoint para cadastrar um local de coleta"
    #swagger.parameters['criarLocal'] = {
        in: 'body',
        description: "Dados do local de coleta",
        required: true,
        schema: {
            $name: "Reciclagem do João", 
            $address: "Rua Santa Catarina numero 20"
        }
    }
*/
)


locaisRoutes.get('/:id', validateToken, LocaisController.listLocal

/*
    #swagger.tags = ['Locais de coleta']
*/
)

locaisRoutes.delete('/:id', validateToken, LocaisController.deleteLocal
/*
    #swagger.tags = ['Locais de coleta']
*/
)


locaisRoutes.put('/:id', validateToken, LocaisController.updateLocal
    /*
    #swagger.tags = ['Locais de coleta']
*/
)


locaisRoutes.get('/', validateToken, LocaisController.listLocais
/*
    #swagger.tags = ['Locais de coleta']
*/
)



module.exports = locaisRoutes