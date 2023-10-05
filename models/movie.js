//const { Sequelize } = require("sequelize");

module.exports = (Sequelize,type) => {
    const Movie = Sequelize.define('Movies',{
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        title: type.STRING
    });

    return Movie;
};