// we are creating a shell to run our commands using node
let commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  
  var cmd = data.toString().trim();
  if (cmd === "pwd") {
    commands.pwd();
  } else if (cmd === "date") {
    commands.date();
  } else if (cmd === 'ls'){
    commands.ls('.');
  }


});

// running cat on this file (cat bash.js) prints the code
// running head on this file (head bash.js) prints the first 12 lines of code
// running a pipeline on this file (cat bash.js | head), runs both, but only returns the rightmost command

