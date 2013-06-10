/**
 * Manage and configure authentification with everyauth
 */
exports.configureEveryAuth = function(err,data){

};
exports.findUserById = function(req, userId, callback){

    // use the request in some way ...

    // callback has the signature, function (err, user) {...}

};

exports.getAvatar = function(req, userId, callback){
    require('crypto').
        createHash('md5').
        update("" + (new Date()).getTime()).
        digest("hex");

}