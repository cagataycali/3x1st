var pathExists = require('path-exists');
var async = require('async');
var colors = require('colors');

module.exports = function (path) {
  return new Promise(function(resolve, reject) {
    pathExists(path).then(function(exists) {exists ? resolve() : reject();})
  });
}
