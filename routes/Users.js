const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt_decode = require("jwt-decode");
// const axios = require("axios");
// var session = require('express-session')
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
            res.json({ "error": error });
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
                    res.cookie('userToken', token, { httpOnly: true })
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

users.post('/logout', (req, res) => {
    const token = req.cookies.userToken;
    if(token){
        res.clearCookie('userToken', token, { httpOnly: true  });
        res.status(200).send("Successfully logged out");
    } else {
        res.json({error: "user dosn't exists"});
    }
})

users.post('/update', (req, res) => {

    const token = req.cookies.userToken
    //console.log(token)


    const user = jwt_decode(token)
    const { id } = user;


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
    if (id) {
        User.update({ _id: id }, userData,  (err, numberAffected, rawResponse) => {
            console.log('numberAffected', numberAffected)
            console.log('rawResponse', rawResponse)
        })
        return res.send(userData);
    } else {
        return res.send("User doesn't avilable");
    }
})

users.get("/auth", (req, res) => {

    const token = req.cookies.userToken;

    if(!token){
        return res.status(403).send({error: 'Unauthorized: No token provided'});
    } else {
        jwt.verify(token, env.SECRET_KEY, (err, decoded) => {
            if (err) {
                // Invalid Token
                return res.status(403).send({error: 'Unauthorized: Invalid token provided'});
                // return res.send ({error: err});
            } else {
                // Valid User
                //req.email = decoded.email;
                return res.status(200).send(decoded);
            }
          });
    }
    
})

users.get('/active', (req, res) => {

    const token = req.cookies.userToken;
    if(token) {
        const id = jwt_decode(token).id;
        User.findById({_id: id})
        .then(user => {
            if(user) {

                let user_details = user.toJSON();
                delete user_details._id;
                delete user_details.__v;
                delete user_details.password;

                // let user_details = {
                //     "first_name": user.first_name,
                //     "last_name": user.last_name,
                //     "username": user.username,
                //     "email": user.email,
                //     "date": user.date,
                //     "address": user.address,
                //     "city": user.city,
                //     "dob": user.dob,
                //     "phonenumber": user.phonenumber,
                //     "position": user.position,
                //     "state" : user.state,
                //     "zip": user.zip
                // }
                return res.send(user_details);
            } else {
                return res.json({ error: "User dosn't exists" })
            }
        })
        .catch(err => {
            return res.json({ error: err});
        })
    } else {
       return res.json({error: "User dosn't exists"});
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

            let user_details = user.toJSON();
            delete user_details._id;
            delete user_details.__v;
            delete user_details.password;

            // let user_details = {
            //     "first_name": user.first_name,
            //     "last_name": user.last_name,
            //     "username": user.username,
            //     "email": user.email,
            //     "date": user.date,
            //     "address": user.address,
            //     "city": user.city,
            //     "dob": user.dob,
            //     "phonenumber": user.phonenumber,
            //     "position": user.position,
            //     "state" : user.state,
            //     "zip": user.zip
            // }
            return res.status(200).send(user_details);
        } else {
            return res.json({ error: "User dosn't exists" })
        }
    })
    .catch(err => {
        return res.json({ error: err});
    })
})


module.exports = users;