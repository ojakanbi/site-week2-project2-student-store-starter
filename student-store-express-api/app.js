// YOUR CODE HERE
const express = require("express") // imports express
app = express() // creates an express application
const morgan = require("morgan") // imports morgan
const apiData = require("./routes/store") // imports apiData from store.js
const cors = require("cors")

app.use(cors())
app.use(morgan("tiny")) //logging request along with some other information 
app.use(express.json()) // parses incoming requests with JSON payloads and is based on body-parser

app.use("/", apiData )// uses apiData from store.js



app.get("/", (req, res) => {
    res.status(200).json({ "ping": "pong" });
    console.log("this is been hit")
}) // responds to GET requests to the root URL ("/") with an empty object


module.exports = app // exports app from this module (important!)