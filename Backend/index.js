require('dotenv').config({ path: __dirname + '/.env' });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./model/userModel');
const ConsumerModel = require('./model/consumerModel');

const app = express();
app.use(express.json());
app.use(cors());

const connection_string = process.env.CONNECTION_STRING;
mongoose.connect(connection_string);

app.get('/user/services', (req, res) => {
    const { userType } = req.query;
    res.json({ userType, message: 'Welcome to the User Services page! This is a placeholder response.' });
});

app.get('/user/consumerData', (req, res) =>{
    ConsumerModel.find()
    .then(consumer => res.json(consumer))
    .catch(err => res.json(err));
});

app.post('/user/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    console.log(user.userType);
                    res.json({ result: "success", userName: user.name, userType: user.userType });
                } else {
                    res.json({ result: "incorrect password!" });
                }
            } else {
                res.json({ result: "User not found" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ result: "Internal Server Error" });
        });
});

app.post('/user/services', (req, res) =>{
    ConsumerModel.create(req.body)
    .then(consumers => res.json(consumers))
    .catch(err => res.json(err));
});

app.post('/user/signup', (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.get('/user/home', (req, res) => {
    const { userName, userType } = req.query;
    res.json({ userName, userType, services: "Your services data here" });
});

app.listen(3001, () => {
    console.log("server is running");
});
