module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Box", {
        //box x position
        x: DataTypes.INTEGER,
        //box y position
        y: DataTypes.INTEGER,
        //width
        w: DataTypes.INTEGER,
        //height
        h: DataTypes.INTEGER,

        type:DataTypes.ENUM('INSTRUMENT','EFFECT','PATTERN','DESTINATION'),
        content: DataTypes.STRING
    })
};