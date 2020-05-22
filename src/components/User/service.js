const Tutorial = require('./model');

/**
 * @exports
 * @method findAll
 * @param {}
 * @summary get list of all Tutorials
 * @returns Promise<Tutorial[]>
 */
function findAll() {
    return Tutorial.findAll()
        .then((data) => data)
        .catch((err) => err);
}

/**
 * @exports
 * @method findById
 * @param { id }
 * @summary find tutorial by id
 * @returns Promise<Tutorial[]>
 */
function findById(id) {
    return Tutorial.findByPk(id)
        .then((data) => data)
        .catch((err) => err);
}

/**
 * @exports
 * @method create
 * @param { title }
 * @param { published }
 * @param { description }
 * @summary create new Tutorial
 * @returns Promise<Tutorial[]>
 */
function create(title, description, published) {
    return Tutorial.create({ title, description, published });
}

/**
 * @exports
 * @method updateById
 * @param { id }
 * @param { body }
 * @summary update tutorial by id
 * @returns Promise<Tutorial[]>
 */
function updateById(id, body) {
    return Tutorial.update(body, {
        where: { id },
    })
        .then((num) => {
            // eslint-disable-next-line eqeqeq
            if (num == 1) return 'Tutorial was updated successfully.';
        })
        .catch((err) => err);
}

/**
 * @exports
 * @method deleteById
 * @param { id }
 * @summary delete tutorial by id
 * @returns Promise<Tutorial[]>
 */
function deleteById(id) {
    return Tutorial.destroy({
        where: { id },
    })
        .then((num) => {
            if (num === 1) return 'Tutorial was deleted successfully!';
        })
        .catch((err) => err);
}

/**
 * @exports
 * @method deleteById
 * @param { id }
 * @summary delete all tutorials
 * @returns Promise<Tutorial[]>
 */
function deleteAll() {
    return Tutorial.destroy({
        where: {},
        truncate: false,
    })
        .then((nums) => `${nums} Tutorials were deleted successfully!`)
        .catch((err) => err);
}


/**
 * @exports
 * @method findAllPublished
 * @param { }
 * @summary find all published tutorials
 * @returns Promise<Tutorial[]>
 */
function findAllPublished() {
    return Tutorial.findAll({ where: { published: true } })
        .then((data) => data)
        .catch((err) => err);
}


module.exports = {
    create,
    findAll,
    findById,
    deleteAll,
    updateById,
    deleteById,
    findAllPublished,
};
