module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Song", {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        bpm:DataTypes.FLOAT
    });
};