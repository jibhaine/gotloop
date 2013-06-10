
/*
 * GET home page.
 */

// load resources
//exports.configs= require(__dirname +'/configs');
exports.loops =  require(__dirname +'/loops');
//exports.tags =  require(__dirname +'/tags');
//exports.votes =  require(__dirname +'/votes');
//exports.comments =  require(__dirname +'/comments');
exports.users =  require(__dirname +'/users');

//exports.songs =  require(__dirname +'/songs');
//exports.boxs =  require(__dirname +'/boxs');
//exports.presets =  require(__dirname +'/presets');

//index page
exports.index =
    function index(req, res) {
        res.render('index',{title:'Gotloop',description:'Gotloop is a sample sharing site'});
    };

var availableResources = [
    'users',
    'loops',
    'comments',
    'tags',
    'votes',
    'songs',
    'configs',
    'boxes'
];

exports.jsonData =
    function jsonData(req, res, next) {
        if (req.params.resource){
            res.json(
                {
                key:req.params.resource,
                data:[]
                }
            );
        }else{
            res.json(availableResources);
            next();
        }
    };

//application page (embedded packaged ?)
exports.appl =
    function appl(req, res) {
        res.render('apps/'+req.params.app_name,{title:'Application Name',description:'Gotloop is a sample sharing site'});
    };
//partials for angular
exports.partial =
    function partial(req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    };