const Joi = require('@hapi/joi');

/**
 * @exports
 * @method validateId
 * @param { id }
 * @summary validate id
 * @returns
 */
function validateId(id) {
    return Joi.object({
        id: Joi
            .string()
            .required(),
    })
        .validate({
            id,
        },
        { allowUnknown: true });
}

/**
 * @exports
 * @method validateTutorial
 * @param { title }
 * @param { published }
 * @param { description }
 * @summary validate title, description, published
 * @returns
 */
function validateTutorial(title, description, published) {
    return Joi.object({
        title: Joi
            .string()
            .required(),
        description: Joi
            .string()
            .required(),
        published: Joi
            .boolean()
            .required(),
    })
        .validate({
            title,
            description,
            published,
        },
        { allowUnknown: true });
}

module.exports = {
    validateId,
    validateTutorial,
};
