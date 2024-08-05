const { Router } = require("express")
const PermissaoController = require("../controller/permissao.controller")

const permissoesRoutes = new Router()

permissoesRoutes.post('/', PermissaoController.createPermissao)
permissoesRoutes.get('/', PermissaoController.listarPermissoes)
permissoesRoutes.delete('/:id', PermissaoController.deletePermissao)

permissoesRoutes.post('/atribuir', PermissaoController.atribuirPermissao)

module.exports = permissoesRoutes