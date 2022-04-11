const mongoose = require("mongoose");

const product3Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    food: [
        {
            tag : Array,
            name : String,
            price : Number,
            description: String,
            imageurl : String,
        }
    ],
});

module.exports = mongoose.model("Product3", product3Schema);