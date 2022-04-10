const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customer : {
        type : String,
    },
    kitchenEmployee : {
        type : String,
    },
    deliveryPersonnel : {
        type : String,
    },
    orderDetails : [
        {
            name : String,
            quantity : Number,
        }
    ],
    status : {
        type : Number,
    }
})

module.exports = mongoose.model("Order",orderSchema);