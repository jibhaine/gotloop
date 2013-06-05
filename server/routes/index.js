
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

exports.index =
//partials for angular
    function index(req, res) {
        res.render('index',{title:'Gotloop',welcome:'Gotloop is a sample sharing site'});
    };
exports.partial =
//partials for angular
    function partial(req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    };