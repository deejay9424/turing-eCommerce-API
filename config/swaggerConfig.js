const VariableStore = require('./VariableStore.json')
const swaggerDefinition = {
    info: {
        title: 'Swagger API for eCommerce Website',
        version: '1.0.0',
        description: 'Endpoints for turing eCommerce website',
    },
    host: VariableStore.hostnameSwagger,
    basePath: '/',
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'User Key',
            scheme: 'bearer',
            in: 'header',
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

module.exports = options;