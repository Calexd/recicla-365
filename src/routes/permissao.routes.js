const { Router } = require("express")
const PermissaoController = require("../controller/permissao.controller")

const permissoesRoutes = new Router()

permissoesRoutes.post('/', PermissaoController.createPermissao
       /*
    #swagger.tags = ['Permissões']
*/
)
permissoesRoutes.get('/', PermissaoController.listarPermissoes
 /*
    #swagger.tags = ['Permissões']
*/
)
permissoesRoutes.delete('/:id', PermissaoController.deletePermissao
/*
    #swagger.tags = ['Permissões']
*/
)

permissoesRoutes.post('/atribuir', PermissaoController.atribuirPermissao
/*
    #swagger.tags = ['Permissões']
*/
)

module.exports = permissoesRoutes