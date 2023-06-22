
const express = require("express");
const router = express.Router();

const apiData = require("../data/db.json");
const e = require("express");

// console.log(apiData.products)


router.get("/api", (req, res) => {  // responds to GET requests to the root URL ("/") with an empty object
    res.status(200).json(apiData);
    res.send(apiData)
    
    
});



router.get("/products/:productId", (req, res) => {
    const productId = parseInt(req.params.productId);
    let product = apiData.products.find((p) => p.id === productId);
    
    if (product) {
      res.status(200).json(product);
     
      
      
     
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  });
  


module.exports = router;