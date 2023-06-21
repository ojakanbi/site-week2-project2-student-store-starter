
const fs = require("fs") // imports the file system module

// Reads the json file object 
const json = fs.readFile("./data/db.json", "utf8", (err, data) => {
    if (err) { // if there is an error, log it
        console.error("Error reading file" + err) 
        return;
    }
    try { // try to parse the json file object
        const json = JSON.parse(data)
        // console.log(json)
        return json;
    }
    catch (err) { // if there is an error, log it
        console.error('Error parsing JSON:', err);
      }
      return json;
      

    }

   


    
    );





module.exports = json; // exports the json file object (important!)