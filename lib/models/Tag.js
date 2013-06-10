module.exports = function(sequelize, DataTypes) {

    return sequelize.define("Tag", {
        key: DataTypes.STRING
    },{
        instanceMethods: {
            countOccurences:function(key){

            }
        }
    });
};