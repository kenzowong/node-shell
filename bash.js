const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
// // output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' '); // remove the newline

    if (cmd[0] === 'pwd') {
        pwd();
    }
    else if (cmd[0] === 'ls') {
        ls();
    }
    else if (cmd[0] === 'cat') {
        cat(cmd[1]);
    }
    
    process.stdout.write('\nprompt > ');
});
// // process.stdout.write('You typed: ' + cmd);
// // process.stdout.write('\nprompt > ');
    
// });
// ls();
// process.stdout.write(process.cwd());
