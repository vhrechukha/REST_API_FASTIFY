const Sequelize = require('sequelize');
const { sequelize } = require('../../config/connection');

const Tutorial = sequelize.define('tutorial', {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    published: {
        type: Sequelize.BOOLEAN,
    },
}, {
    sequelize,
    modelName: 'Tutorial',
});

module.exports = Tutorial;
