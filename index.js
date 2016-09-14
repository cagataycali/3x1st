var pathExists = require('path-exists');
var async = require('async');
var colors = require('colors');

module.exports = function (path) {
  pathExists(path).then(function(exists) {exists ? resolve() : reject();})
}
