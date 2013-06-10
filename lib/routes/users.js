
var User = require('../models').User;
/*
 * GET users listing.
 */

exports.findAll = function(req, res){

    User.find({});

  res.send("respond with a resource");
};