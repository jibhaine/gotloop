/**
 * a simple module getting ascii tabs of lines from a file.
 */
(function(exports){
    'use strict';
    var fs = require('fs'),
        readline = require('readline'),
        _ = require('underscore'),
        logger = require('log4js').getLogger();

    var ascii = [];

    exports.randomLogo = function(error){
        if (!ascii.length){
            var dir = __dirname + '/../../data/ascii',
                //generate random index (assuming 5 files in data/ascii
                randomIndex = _.random(1,5),
                //filePath
                randomPath = dir+'/ascii'+randomIndex+'.txt';

                logger.debug('opening ascii #',randomIndex);

            //opening file ((input, output, completer, terminal)
            var rd = readline.createInterface({
                input: fs.createReadStream(randomPath,{}),
                output: process.stdout,
                terminal: false
            });
            //listen for line events and add each in ascii
            rd.on('line', function(line) {
                ascii.push(line);
                logger.info(line);
            });
        }
        return ascii;
    };

})(exports);