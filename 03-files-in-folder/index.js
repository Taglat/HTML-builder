const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, fileNames) => {
  if (err) {
    console.error(err);
  } else {
    fileNames.forEach(fileName => {
      fs.stat(path.join(folderPath, fileName), (err, stats) => {
        if (err) {
          console.error(err);
        } else {
          const fileExt = path.extname(fileName);
          const output = `${fileName}-${fileExt}-${stats.size / 1024}kb`;
          console.log(output);
        }
      });
    });
  }
});
