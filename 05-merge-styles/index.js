const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, 'styles');
const distDir = path.join(__dirname, 'project-dist');

if (!fs.exists(distDir)) fs.mkdir(distDir);

const bundlePath = path.join(distDir, 'bundle.css');

fs.readdir(stylesDir, (err, fileNames) => {
    if (err) console.error(err);
    else {
        fileNames.forEach(fileName => {
            if (path.extname(fileName) === '.css') {
                fs.readFile(path.join(stylesDir, fileName), (err, data) => {
                    if (err) console.error(err);
                    else {
                        fs.appendFile(bundlePath, data, (err) => {
                            if (err) console.error(err);
                            else console.log(`The file ${fileName} was added to the bundle!`);
                        });
                    }
                });
            }
        });
    }
});
