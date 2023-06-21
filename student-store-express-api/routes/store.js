const express = require("express");
const router = express.Router();

const apiData = require("../models/store");
const e = require("express");

router.get("/", (req, res) => {  // responds to GET requests to the root URL ("/") with an empty object
    res.status(200).json(apiData);
    console.log(apiData)
    
});

console.log(apiData);

module.exports = router;