const Sequelize = require('sequelize');
const dbConfig = require('./db.config.example.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});
sequelize.sync().then(() => {
    console.log('Users db and user table have been created');
});

module.exports = {
    sequelize,
};
