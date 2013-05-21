(function(exports){
/**
 * Created with JetBrains WebStorm.
 * User: Benjamin Legrand
 * Date: 21/05/13
 * Time: 00:56
 * To change this template use File | Settings | File Templates.
 */
var Sequelize = require('sequelize'),
    config    = require('node-yaml-config').database;  // we use node-config to handle environments

// initialize database connection
var sequelize = new Sequelize(
    config.name,
    config.username,
    config.password,
    config.options
);

// load models
exports.Config= sequelize.import(__dirname +'/Config');
exports.Loop = sequelize.import(__dirname +'/Loop');
exports.Tag = sequelize.import(__dirname +'/Tag');
exports.Vote = sequelize.import(__dirname +'/Vote');
exports.Comment = sequelize.import(__dirname +'/Comment');
exports.User = sequelize.import(__dirname +'/User');

// describe relationships
(function(m) {
    m.Config.belongsTo(m.User);
    m.Loop.belongsTo(m.User);

    m.Loop.hasMany(m.Tag);
    m.Tag.hasMany(m.Loop);

    m.User.hasMany(m.Loop);
    m.User.hasMany(m.Comment);
    m.Loop.hasOne(m.User);
})(exports);

// export connection
exports.sequelize = sequelize;
})(module.exports);