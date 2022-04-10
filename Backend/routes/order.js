const express = require('express');
const order = require('../models/order');
const router = express.Router();

// router.get('/',(req,res) => {

// })

router.post('/save', (req, res) => {
    const order1 = new order({
        customer : req.body.customer,
        kitchenEmployee : req.body.kitchenEmployee,
        deliveryPersonnel : req.body.deliveryPersonnel,
        orderDetails : req.body.orderDetails,
        status : req.body.status,
    });
    order1.save()
        .then((result) => {
            res.send(result);
            console.log("Order saved");
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;