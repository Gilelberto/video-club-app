//const Sequelize = require("sequelize");

module.exports = (sequelize,type) => {
                                    //nombre tabla , objeto
    const Director = sequelize.define('directors',{
        id: {type: type.INTEGER, primaryKey: true, autoIncrement: true},
        name: type.STRING,
        lastName: type.STRING
    });
    return Director;
}