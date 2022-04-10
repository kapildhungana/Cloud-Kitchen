const express = require('express');
const user = require('../models/user');
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();

const authenticate = async(req, res, next) => {
    try {
        const token = req.body.token;
        const authenticate_user = jwt.verify(token, process.env.SECRET);
        var email = authenticate_user.email;
        var type = authenticate_user.type;
        await user.findOne({ email: email, type: type })
            .then((result) => {
                if (result) {
                    req.body = result;
                    next();
                } else {
                    res.send("Invalid Data");
                }
            })
            .catch((err) => {
                res.send("Error:\n" + err);
            });
    } catch (err) {
        res.send("Authentication failed:\n" + err);
    }
}

router.get('/profile', authenticate, (req, res) => {
    res.send("Welcome!\nUser Data is:\n" + req.body);
})

router.post('/register', (req, res) => {
    const user1 = new user({
        fullName: req.body.fullname,
        type: req.body.type,
        email: req.body.email,
        phone: req.body.phonenumber,
        password: req.body.password
    });
    user1.save()
        .then((result) => {
            res.send(result);
            console.log("Successful Registration");
        })
        .catch((error) => {
            console.log(error);
        })
});

router.post('/login', async(req, res) => {
    const email = req.body.email;
    const type = req.body.type;
    console.log(req.body);
    await user.findOne({ email: req.body.email, password: req.body.password, type: req.body.type })
        .then((result) => {
            if (result) {
                console.log(result);
                const token = jwt.sign({
                        email,
                        type,
                    },
                    process.env.SECRET);
                res.send({ token });
            } else {
                res.send("Invalid Credentials");
            }
        })
        .catch((err) => {
            res.send("Error" + err);
        })
});

module.exports = router;