module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Vote", {
        username: DataTypes.STRING
    })
};