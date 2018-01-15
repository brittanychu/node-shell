var fs = require('fs');

module.exports = {

    date: function(filename) {
        process.stdout.write(new Date().toLocaleString());
        process.stdout.write('\nprompt >');
    },

    pwd: function(filename){
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt >');
    },

    ls: function(filename){
        return fs.readdir(filename, function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("\nprompt > ");
          });
    },

    echo: function(filename) {
        process.stdout.write(filename);
        process.stdout.write('\nprompt >');
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
    }
}
