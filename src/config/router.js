const UserRouter = require('../components/User/router');

module.exports = {
    /**
     * @function
     * @param {fastify.Application} app
     * @summary init Application router
     * @returns void
     */
    init(app) {
        /**
         * Forwards any requests to the /aoi URI to UserRouter.
         * @name /v1/
         * @function
         * @inner
         * @param {string} prefix - Fastify path
         */
        app.register(UserRouter, { prefix: '/api' });
    },
};
