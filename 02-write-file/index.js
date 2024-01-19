const fs = require('fs');
const path = require('path');

const newFilePath = path.join(__dirname, 'text.txt')

console.log("Hello. Text text to text.txt \nATTENTION: command to logout => exit");

process.stdin.on('data', (data) => {
    const input = data.toString().trim();

    if (input === 'exit') {
        process.exit();
    } else {
        fs.writeFile(newFilePath, input, (err) => {
            err ? console.log(err) : console.log("Text.txt texted"); 
        })
    }
})