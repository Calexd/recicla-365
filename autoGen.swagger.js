const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        title: "Recicla365",
        description: "API Recicla365 usando Express e node.js",
        version: "1.0.0"
    },
    host: "localhost:3000",
    security: [{"apiKeyAuth": []}],
    securityDefinitions: {
        type: "apikey",
        in: "header",
        name: "Authorization",
        description: "Insira o token JWT"
    }
};

const outputFile = './src/routes/doc.swagger.json'
const routes = ['./src/routes/routes.js']

swaggerAutogen(outputFile, routes, doc)