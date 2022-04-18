const express = require('express');
const order = require('../models/order');
const router = express.Router();
const user = require('../models/user');

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
            // res.send(result);
            console.log("Order saved");
        })
        .catch((error) => {
            console.log(error);
        })
});

router.patch('/update0',(req,res) => {
    console.log(req.body);
    console.log(req.body._id);
    order.findById(req.body._id)
    .then(item => item.update({ kitchenEmployee : req.body.kitchen ,status : 1 }));
})

router.patch('/update1',(req,res) => {
    console.log(req.body._id);
    order.findById(req.body._id)
    .then(item => item.update({ status : 2 }));
})

router.patch('/update2',(req,res) => {
    console.log(req.body);
    order.findById(req.body._id)
    .then(item => item.update({ deliveryPersonnel : req.body.delivery ,status : 3 }));
})

router.patch('/address',async (req,res)=>{
    console.log(req.body);
    console.log("here");
    const custAddr = await user.find({email : req.body.customer});
    const kitAddr = await user.find({email : req.body.kitchenEmployee});
    res.send({cust : custAddr, kit : kitAddr});
})

module.exports = router;