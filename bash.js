// we are creating a shell to run our commands using node
let commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  // take data extract a space delimited arg string to pass into each of the fxns defined below cd ..
  var cmd = data.toString().trim().split(" ")[0]
  var remainingArgs = data.toString().trim().split(" ").slice(1).join(" ");
  if (cmd === "pwd") {
    commands.pwd();
  } else if (cmd === "date") {
    commands.date();
  } else if (cmd === 'ls'){
    commands.ls('.');
  } else if (cmd === 'echo') {
    commands.echo(remainingArgs);
  } else if (cmd === "cat") {
    commands.cat(remainingArgs);
  } else if (cmd === "head") {
    commands.head(remainingArgs);
  } else if (cmd === "tail") {
    commands.tail(remainingArgs);
  } else if (cmd === "sort") {
    commands.sort(remainingArgs);
  } else if (cmd === "wc") {
    commands.wc(remainingArgs);
  } else if (cmd === "uniq") {
    commands.uniq(remainingArgs);
  } else if (cmd === 'curl'){
    commands.curl("http://www." + remainingArgs);
  }


});




// running cat on this file (cat bash.js) prints the code
// running head on this file (head bash.js) prints the first 12 lines of code
// running a pipeline on this file (cat bash.js | head), runs both, but only returns the rightmost command

//test
//test
