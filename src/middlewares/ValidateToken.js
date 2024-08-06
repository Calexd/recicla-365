
const {verify} = require('jsonwebtoken')

function validateToken(request, response, next) {
    try {
        const token = request.headers.authorization
         if(!token) {
             return response.status(400).json({mensagem: 'Token não anexado'})
         }

        const jwt = token.split(' ')
        console.log(jwt)
     
        const resultado = verify(jwt[1], process.env.SECRET_JWT)
        request.userId = resultado.id

        next()
 
    } catch (error) {
        if(error.message === "jwt malformed" || error.message === 'jwt expired' ) {
            response.status(401).json({mensagem: 'Token não é valido ou expirado'})
        } else {
            response.status(500).json({mensagem: 'A requisição fahou'})
        }
    }
}

module.exports = validateToken