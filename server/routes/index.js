
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'GotLoop' });
};
exports.html5 = function(req, res){
    res.render('html5', { title: 'GotLoop' });
};