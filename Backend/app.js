const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const product = require('./models/product');
import dotenv from 'dotenv'

const app = express();
const port = 7777;
const cors = require('cors');
const productModels = require('./models/product');
const product3Models = require('./models/product3');
const orderModel = require('./models/order');

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(cors());

const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const product3Router = require("./routes/product3");
const orderRouter = require("./routes/order");


const dbURI = 'mongodb+srv://cloud:cloud@cloudkitchen.afn38.mongodb.net/?retryWrites=true&w=majority&appName=cloudkitchen';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        console.log("Connected to the database!");
        app.listen(port);
    })
    .catch((err) => {
        console.log(err);
        console.log("Couldn't connect to the database");
    });

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/products3", product3Router);
app.use("/order",orderRouter);


app.get('/', function(req, res) {
    res.send("WELCOME TO BACKEND");
    // product.find((err, docs) => {
    //     if (!err) {
    //         res.render("list", {
    //             data: docs
    //         });
    //     } else {
    //         console.log('Failed to retrieve the product List: ' + err);
    //     }
    // });

});