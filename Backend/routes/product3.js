const express = require('express');
const router = express.Router();
const product3 = require('../models/product3');

router.get('/name', (req, res) => {
    res.send("Hello Chowmein3!");
});

router.get('/save', (req, res) => {
    const product31 = new product3({
        title : "Italian",
        food : [
            {
                tag : ["veg","all time snack"],
                name : "Pasta Carbonara",
                price : 25, 
                imageurl : "random1",           
            },
            {
                tag : ["veg","kids special"],
                name : "Mushroom Risotto",
                price : 25, 
                imageurl : "random2",
            },
            {
                tag : ["veg","most loved"],
                name : "Margherita Pizza",
                price : 25, 
                imageurl : "random3",
            },
            {
                tag : ["veg","kids special"],
                name : "Mushroom Risotto",
                price : 25, 
                imageurl : "random2",
            },
            {
                tag : ["veg","kids special"],
                name : "Mushroom Risotto",
                price : 25, 
                imageurl : "random2",
            },
            {
                tag : ["veg","all time snack"],
                name : "Pasta Carbonara",
                price : 25, 
                imageurl : "random1",           
            },
            {
                tag : ["veg","kids special"],
                name : "Mushroom Risotto",
                price : 25, 
                imageurl : "random2",
            },
            {
                tag : ["veg","most loved"],
                name : "Margherita Pizza",
                price : 25, 
                imageurl : "random3",
            },
            {
                tag : ["veg","kids special"],
                name : "Mushroom Risotto",
                price : 25, 
                imageurl : "random2",
            },
            {
                tag : ["veg","kids special"],
                name : "Mushroom Risotto",
                price : 25, 
                imageurl : "random2",
            },
            
        ],
    });
    product31.save()
        .then((result) => {
            res.send(result);
            console.log("Successful");
        })
        .catch((error) => {
            console.log(error);
        })
})

module.exports = router;