var fs = require('fs');

module.exports = {

    date: function() {
        process.stdout.write(new Date().toLocaleString());
        process.stdout.write('\nprompt >');
    },

    pwd: function(){
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt >');
    },

    ls: function(path){
        return fs.readdir(path, function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    }
}