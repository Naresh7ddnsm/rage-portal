const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt_decode = require("jwt-decode");
const axios = require("axios");
var session = require('express-session')
const env = require('../env');


let User = require('../models/User');
// let UserUpdate = require('../models/User_update');
users.use(cors());

const { SECRET_KEY } = env;

users.post("/register", (req, res) => {
    let today = new Date();
    let userData = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "password": req.body.password,
        "created": today
    }

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' is registerd successfully' })
                        })
                        .catch(error => {
                            res.json({ error });
                        })
                })
            } else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(error => {
            res.json({ error });
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email
                    };
                    let token = jwt.sign(payload, SECRET_KEY, {
                        expiresIn: 1440
                    })
                    // Disabled
                    // req.session.userId = user._id;
                    res.cookie('userToken', token, { httpOnly: false })
                    res.send(token);
                } else {
                    res.json({ error: "User dosn't exists" })
                }
            } else {
                res.json({ error: "User dosn't exists" })
            }
            // console.log('req.session.userId : ', req.session.userId)
        })
        .catch(err => {
            res.send('error: ' + err);
        })
})

users.post('/update', (req, res) => {

    const { userId } = req.session;

    let today = new Date();
    let userData = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "last_update": today,
        "username": req.body.username,
        "position": req.body.position,
        "dob": req.body.dob,
        "city": req.body.city,
        "state": req.body.state,
        "zip": req.body.zip,
        "phonenumber": req.body.phonenumber,
        "address": req.body.address
    }
    if (userId) {
        User.update({ _id: userId }, userData, function (err, numberAffected, rawResponse) {
            console.log('numberAffected', numberAffected)
            console.log('rawResponse', rawResponse)
        })
        return res.send(req.session);
    } else {
        return res.send("User doesn't avilable");
    }
})

users.get("/auth", (req, res) => {

    const token = req.cookies.userToken;

    if(!token){
        return res.send ({error: 'Unauthorized: No token provided'});
    } else {
        jwt.verify(token, env.SECRET_KEY, (err, decoded) => {
            if (err) {
                // Invalid Token
                return res.send ({error: 'Unauthorized: Invalid token provided'});
                // return res.send ({error: err});
            } else {
                // Valid User
                //req.email = decoded.email;
                return res.send (decoded);
            }
          });
    }
    
})

users.get('/:id', (req, res) => {
    let id = req.params.id;

    // console.log("ididid: ", id)

    // User.findById({_id: new ObjectId(id)})
    User.findById({_id: id})
    .then(user => {

        // console.log("useruser: ", user)

        if(user) {
            let user_details = {
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "date": user.date,
                "address": user.address,
                "city": user.city,
                "dob": user.dob,
                "phonenumber": user.phonenumber,
                "position": user.position,
                "state" : user.state,
                "zip": user.zip
            }
            return res.send(user_details);
        } else {
            return res.json({ error: "User dosn't exists" })
        }
    })
    .catch(err => {
        return res.json({ error: err});
    })
})

module.exports = users;