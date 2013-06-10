module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Config", {
        username: DataTypes.STRING
    })
};