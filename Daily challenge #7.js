  var fs = require('fs'),
    path = require('path');

module.exports = function (directory, filter, callback) { 
    if (directory) {
        fs.readdir(directory, function (err, list) {
          if (err) return callback(err); // early return

          for (var i = 0; i < list.length; i++) {
            var filePath = list[i];

            if (path.extname(filePath) === '.' + filter) {
                callback(null, filePath);
            }
          };
        });
    }
}