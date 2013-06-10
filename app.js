var log4js = require('log4js'),
    logger = log4js.getLogger('all');

/**
 * Logging config
 */
log4js.configure(
    {
        appenders: [
            { type: 'console' },
            { type: 'file', filename: __dirname +'/server/logs/gotloop.log', category: 'all' },
            { type: 'file', filename: __dirname +'/server/logs/error.log', category: 'error' }
        ]}
);
logger.setLevel('INFO');
log4js.replaceConsole(logger);

/**
 * Module dependencies.
 */

var express = require('express')
  , ascii = require('./server/utils/ascii').randomLogo()
  , routes = require('./server/routes')
  , models = require('./server/models')
  , user = require('./server/routes/users')
  , http = require('http')
  , fs = require('fs')
  , path = require('path');




logger.info('Initializing Express...');
var app = express();
app.use(log4js.connectLogger(logger, { level: log4js.levels.DEBUG }));
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('i got a looop'));
app.use(express.session());
app.use(app.router);
app.use(everyauth.middleware());
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


 //index of the site, main entry point
app.get('/', routes.index);

//sub site apps / services, accessible via simple html requests.
//app.get('/login', routes.login);
//app.get('/upload', routes.upload);
//app.get('/cutter', routes.cutter);
//app.get('/boxon', routes.boxon);
//app.get('/admin', routes.admin);

//partials for angular and ajax requests.
//TODO .jade partials request
app.get('/partial/:name',routes.partial);

//TODO .json  request
app.get('/api/:resource',routes.jsonData);

exports.app = app;

if(process.env !== 'TEST'){
//init server.
var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'))
});
}

/*
//synchronize ORM with database.
models.sequelize.sync().error(function(err) {
        logger.error(err);
}).success(function(it) {
    logger.info(it.length + 'tables successfully modified');
});
*/