const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'EIGEN Backend Test',
            version: '1.0.0',
            description: 'EIGEN Backend Test',
        },
    },
    apis: ['./routes/api/*.js'], // Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;