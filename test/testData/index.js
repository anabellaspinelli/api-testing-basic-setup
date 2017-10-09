let fs = require('fs');
let path = require('path');

function readTestDataFile(filename) {
    return JSON.parse(fs.readFileSync(path.join(__dirname, filename)));
}

module.exports = {};
