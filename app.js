'use strict';

var fs = require('fs')
    , gm = require('gm');

// resize and remove EXIF profile data
gm('./in/left.jpg')
    .append('./in/right.jpg', true)
    .noProfile()
    .write('./out/spread.jpg', function (err) {
        if (!err){
            console.log('done');
        } else {
            console.warn(err.message);
        }
    });

process.exit();