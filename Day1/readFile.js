"use strict";
exports.__esModule = true;
exports.readFile = void 0;
var fs = require('fs');
var readFile = function (path) {
    var file = fs.readFileSync(path, 'utf8');
    return file;
};
exports.readFile = readFile;
