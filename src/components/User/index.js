const UserService = require('./service');
const UserValidation = require('./validation');
const ValidationError = require('../../error/ValidationError');

/**
 * @function findAll
 * @param {fastify.Request} req
 * @param {fastify.Reply} reply
 * @returns {Promise < void >}
 */
async function findAll(req, reply) {
    try {
        const data = await UserService.findAll();

        return data;
    } catch (error) {
        reply.code(500).type('json').send(error);
    }
}

/**
 * @function findById
 * @param {fastify.Request} req
 * @param {fastify.Reply} reply
 * @returns {Promise < void >}
 */
async function findById(req, reply) {
    try {
        const data = await UserService.findById(req.params.id);

        return data;
    } catch (error) {
        if (error instanceof ValidationError) {
            return reply.status(422).send({
                message: error.message,
            });
        }

        reply.code(500).type('json').send(error);
    }
}

/**
 * @function create
 * @param {fastify.Request} req
 * @param {fastify.Reply} reply
 * @returns {Promise < void >}
 */
function create(req, reply) {
    try {
        const { title, description, published } = req.body;

        const { error } = UserValidation.validateTutorial(title, description, published);

        if (error) {
            throw new ValidationError(error.details);
        }

        const data = UserService.create(title, description, published);

        return data;
    } catch (error) {
        if (error instanceof ValidationError) {
            return reply.status(422).send({
                message: error.message,
            });
        }

        reply.code(500).type('json').send(error);
    }
}

/**
 * @function updateById
 * @param {fastify.Request} req
 * @param {fastify.Reply} reply
 * @returns {Promise < void >}
 */
function updateById(req, reply) {
    try {
        const { error } = UserValidation.validateId(req.body.id);

        if (error) {
            throw new ValidationError(error.details);
        }

        const answer = UserService.updateById(req.body.id, req.body);

        return answer;
    } catch (error) {
        if (error instanceof ValidationError) {
            return reply.status(422).send({
                message: error.message,
            });
        }

        reply.code(500).type('json').send(error);
    }
}

/**
 * @function deleteById
 * @param {fastify.Request} req
 * @param {fastify.Reply} reply
 * @returns {Promise < void >}
 */
function deleteById(req, reply) {
    try {
        const { error } = UserValidation.validateId(req.body.id);

        if (error) {
            throw new ValidationError(error.details);
        }
        const answer = UserService.deleteById(req.body.id);

        return answer;
    } catch (error) {
        reply.code(500).type('json').send(error);
    }
}

/**
 * @function deleteAll
 * @param {fastify.Request} req
 * @param {fastify.Reply} reply
 * @returns {Promise < void >}
 */
function deleteAll(req, reply) {
    try {
        const answer = UserService.deleteAll();

        return answer;
    } catch (error) {
        reply.code(500).type('json').send(error);
    }
}

/**
 * @function findAllPublishedTutorials
 * @param {fastify.Request} req
 * @param {fastify.Reply} reply
 * @returns {Promise < void >}
 */
function findAllPublishedTutorials(req, reply) {
    try {
        const answer = UserService.findAllPublished();

        return answer;
    } catch (error) {
        reply.code(500).type('json').send(error);
    }
}

module.exports = {
    create,
    findAll,
    findById,
    updateById,
    deleteById,
    deleteAll,
    findAllPublishedTutorials,
};
