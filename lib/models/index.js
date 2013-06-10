(function(exports){
/**
 * Created with JetBrains WebStorm.
 * User: Benjamin Legrand
 * Date: 21/05/13
 * Time: 00:56
 * To change this template use File | Settings | File Templates.
 */
var Sequelize = require('sequelize-postgres').sequelize
    , log4js = require('log4js')
    , logger = log4js.getLogger()
    , config    = require('node-yaml-config').load('config/config.yaml');  // we use node-config to handle environments

log4js.replaceConsole(logger);
console.info('Initialize Database...');
// initialize database connection
var sequelize = new Sequelize(
    config.db.schema,
    config.db.user,
    config.db.pass,
    {
        dialect:config.db.dialect,
        protocol: config.db.protocol,
        port:   config.db.port
    }
);
    console.debug('Database configuration ',sequelize.config.host,sequelize.config.port,sequelize.config.database);
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

    m.Loop.hasMany(m.Comment);
    m.Loop.hasMany(m.Tag);


    m.User.hasMany(m.Loop);
    m.Loop.hasOne(m.User);
})(exports);

// export connection
exports.sequelize = sequelize;

})(module.exports);