module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Loop", {
        username: DataTypes.STRING
    })
};