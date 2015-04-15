var log4js = require('log4js'),
    logger = log4js.getLogger('all');

/**
 * Logging config
 */
log4js.configure(
    {
        appenders: [
            {type: 'console'},
            {type: 'file', filename: __dirname + '/logs/gotloop.log', category: 'all'},
            {type: 'file', filename: __dirname + '/logs/error.log', category: 'error'}
        ]
    }
);
logger.setLevel('INFO');
log4js.replaceConsole(logger);

/**
 * Module dependencies.
 */
var express = require('express')
    , favicon = require('serve-favicon')
    , methodOverride = require('method-override')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , multer = require('multer')
    , errorHandler = require('errorhandler')
    , routes = require('./lib/routes')
    , models = require('./lib/models')
    , user = require('./lib/routes/users')
    , less = require('less-middleware')
    , http = require('http')
    , fs = require('fs')
    , path = require('path');

/**
 * Express configuration
 */

logger.info('Initializing Express...');
var app = express();
app.use(log4js.connectLogger(logger, {level: log4js.levels.DEBUG}));
// all environments
app.set('port', process.env.PORT || '3000');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cookieParser('i got a looop'));
app.use(session({resave:false,secret:'i got a looop', saveUninitialized:true}));

//todo replace with passportjs
//app.use(everyauth.middleware());
//less and static filess
app.use(less(path.join(__dirname, 'public'), {compress: true}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(errorHandler());
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
app.get('/partial/:name', routes.partial);

//TODO .json  request
app.get('/api/:resource', routes.jsonData);

exports.app = app;


//synchronize ORM with database at startup, and launch http server on success.
models.sequelize.sync().complete(function (err) {
    if(err){
        throw err;
        logger.error(err);
    }else{
        http.createServer(app).listen(app.get('port'), function () {
            console.log('Express server listening on port ' + app.get('port'))
        });
    }
});
*/
