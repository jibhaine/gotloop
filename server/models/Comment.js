module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Comment", {
        content: DataTypes.STRING
    })
};