require('dotenv').config();
const swaggerDefinition = {
    info: {
        title: 'API for eCommerce Website',
        version: '1.0.0',
        description: 'Endpoints for eCommerce website',
    },
    host: process.env.HostName,
    basePath: '/',
    securityDefinitions: {
        UserSecurity: {
            type: 'apiKey',
            name: 'User-Key',
            scheme: 'bearer',
            in: 'header',
        },
    },
    schemes: ["http"]
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

module.exports = options;