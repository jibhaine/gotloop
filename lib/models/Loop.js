module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Loop", {
        key: {type: DataTypes.STRING, unique: true},
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        bpm: DataTypes.FLOAT,
        duration: DataTypes.FLOAT,
        isCommentable:DataTypes.BOOLEAN,
        isShareable:DataTypes.BOOLEAN,
        states: {
            type:   DataTypes.ENUM,
            values: ['active', 'pending', 'deleted']
        }
    });
};