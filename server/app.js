var log4js = require('log4js');
//logg configuration
log4js.configure({
        appenders: [
            { type: 'console' },
            { type: 'file', filename: __dirname +'/logs/gotloop.log', category: 'all' },
            { type: 'file', filename: __dirname +'/logs/error.log', category: 'error' }
        ]}
);
/**
 * Module dependencies.
 */

var express = require('express')
  , ascii = require('./utils/ascii').randomLogo()
  , routes = require('./routes')
  , models = require('./models')
  , user = require('./routes/users')
  , http = require('http')
  , fs = require('fs')
  , path = require('path');

var logger = log4js.getLogger();
logger.setLevel('INFO');

;
log4js.replaceConsole(logger);


logger.info('Initializing Express...');
var app = express();
app.use(log4js.connectLogger(logger, { level: log4js.levels.DEBUG }));
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/html5', routes.html5);
app.get('/users', user.list);


var server = http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'))
});
/*
models.sequelize.sync().error(function(err) {
    if (err) {
        logger.error(err);
        throw err;
    }
}).success(function(it) {
    logger.info(it.length + 'tables successfully modified');
});
*/