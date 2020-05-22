const cors = require('fastify-cors');
const cookieParser = require('fastify-cookie');
const bodyParser = require('fastify-formbody');
const compression = require('fastify-compress');

module.exports = {
    /**
     * @function
     * @description fastify middleware
     * @param {fastify.Application} app
     * @returns void
     */
    init(app) {
        app.register(bodyParser);
        // Content type parser for the content type application/x-www-form-urlencoded
        app.register(cors);
        // Cross-origin resource sharing
        app.register(compression);
        // This plugin adds two functionalities to Fastify: a compress utility and a global compression hook.
        app.register(cookieParser);
        // Support for reading and setting cookies
    },
};
