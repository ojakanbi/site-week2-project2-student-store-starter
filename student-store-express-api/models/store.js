const fs = require("fs");

function readJsonFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/db.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file: ", err);
        reject(err);
        return;
      }
      try {
        const json = JSON.parse(data);
        resolve(json);
      } catch (err) {
        console.error('Error parsing JSON:', err);
        reject(err);
      }
    });
  });
}

module.exports = readJsonFile;
