const UserComponent = require('.');

function UserRoutes(fastify, opts, next) {
    fastify.route({
        url: '/all',
        method: 'GET',
        handler: UserComponent.findAll,
    });

    fastify.route({
        url: '/:id',
        method: 'GET',
        handler: UserComponent.findById,
    });

    fastify.route({
        url: '/create',
        method: 'POST',
        handler: UserComponent.create,
    });

    fastify.route({
        url: '/update',
        method: 'PUT',
        handler: UserComponent.updateById,
    });

    fastify.route({
        url: '/delete',
        method: 'DELETE',
        handler: UserComponent.deleteById,
    });

    fastify.route({
        url: '/deleteAll',
        method: 'DELETE',
        handler: UserComponent.deleteAll,
    });

    fastify.route({
        url: '/findAllPublished',
        method: 'GET',
        handler: UserComponent.findAllPublishedTutorials,
    });

    next();
}

module.exports = UserRoutes;
