const path = require('path');
const fs = require('fs');

const sourceDir = path.join(__dirname, 'files');
const copyDir = path.join(__dirname, 'files-copy');

fs.cp(sourceDir, copyDir, {
    recursive: true
}, (err) => {
    if (err) console.log(err);
    else console.log('Copy directory copied');
});