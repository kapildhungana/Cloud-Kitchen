const express = require('express');
const router = express.Router();
const product = require('../models/product');

router.get('/name', (req, res) => {
    res.send("Hello Chowmein!");
});

router.get('/save', (req, res) => {
    const product1 = new product({
        name: "Chowmein",
        type: "Snacks",
        price: 100,
        quantity: 50,
        description: "It is the best of all times!",
        rating: 9,
        image: "www.chowmein.com"
    });
    product1.save()
        .then((result) => {
            res.send(result);
            console.log("Successful");
        })
        .catch((error) => {
            console.log(error);
        })
})

module.exports = router;