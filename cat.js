const fs = require('fs');

function cat(nameOfFile) {
    fs.readFile(nameOfFile, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        process.stdout.write(data);
    })
}

module.exports = cat;