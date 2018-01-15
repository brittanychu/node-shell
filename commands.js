var fs = require('fs');
var request = require('request')

function done(output){
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
};

module.exports = {

    date: function(filename) {
        done(new Date().toLocaleString());
    },

    pwd: function(filename){
        done(process.cwd());
    },

    ls: function(filename){
        // return fs.readdir(filename, function(err, files) {
        //     if (err) throw err;
        //     files.forEach(function(file) {
        //       process.stdout.write(file.toString() + "\n");
        //     })
        //     process.stdout.write("\nprompt > ");
        //   });

        // var output = "";
        // fs.readdir('.', function(err, files) {
        // files.forEach(function(file) {
        //     output += file.toString() + "\n";
        // })
        // done(output);
        // });


        let result = [];
        fs.readdir(filename, function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              result.push(file);
            })
            done(result.join("\n"))
        });
    },

    echo: function(filename) {
        return done(filename);
        // process.stdout.write(filename);
        // process.stdout.write('\nprompt >');
    },

    cat: function(filename) {
        return fs.readFile('./' + filename, 'utf8', function(err, data) {
            if (err) throw err;
            let content = data
            process.stdout.write(content);
            process.stdout.write("\nprompt > ");
          });
    },

    head: function(filename) {
        return fs.readFile('./' + filename, 'utf8', function(err, data) {
            if (err) throw err;
            let content = data
            let lines = content.split('\n');
            for (let i = 0; i < 5; i++) {
                 process.stdout.write(lines[i] + '\n');
            }

            process.stdout.write("\nprompt > ");
          });
    },

    tail: function(filename) {
        return fs.readFile('./' + filename, 'utf8', function(err, data) {
            if (err) throw err;
            let content = data
            let lines = content.split('\n');
            for (let i = lines.length - 5; i < lines.length; i++) {
                 process.stdout.write(lines[i] + '\n');
            }

            process.stdout.write("\nprompt > ");
          });
    },

    sort: function(filename) {
        return fs.readFile('./' + filename, 'utf8', function(err, data) {
            if (err) throw err;
            let content = data
            let lines = content.split('\n');
            process.stdout.write(lines.sort().join('\n'));
            process.stdout.write("\nprompt > ");
          });
    },

    wc: function(filename) {
        return fs.readFile('./' + filename, 'utf8', function(err, data) {
            if (err) throw err;
            let content = data
            let linesLength = content.split('\n').length;
            process.stdout.write(linesLength.toString() + "\n");
            process.stdout.write("\nprompt > ");
          });
    },

    uniq: function(filename) {
        return fs.readFile('./' + filename, 'utf8', function(err, data) {
            if (err) throw err;
            let content = data
            let lines = content.split('\n');
            let uniqArr = [];
            lines.forEach(function(x) {
                if (uniqArr.indexOf(x) === -1) {
                    uniqArr.push(x);
                }
            })
            process.stdout.write(uniqArr.join("\n"));
            process.stdout.write("\nprompt > ");
          });
    },

    curl: function(filename) {
        return request(filename, function(error, response, body){
            if (error) throw error;
            if (response.statusCode) {
                process.stdout.write(body);
            }
            process.stdout.write("\nprompt > ");
        })
    }
}
