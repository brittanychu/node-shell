// we are creating a shell to run our commands using node


process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim();
  let output
  if (cmd === "pwd") {
    output = process.cwd();
  } else if (cmd === "date") {
    output = new Date().toLocaleString();
  }

  process.stdout.write(output);
  process.stdout.write('\nprompt >');

});

// running cat on this file (cat bash.js) prints the code
// running head on this file (head bash.js) prints the first 12 lines of code
// running a pipeline on this file (cat bash.js | head), runs both, but only returns the rightmost command

