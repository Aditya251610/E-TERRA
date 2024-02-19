require('dotenv').config({ path: __dirname + '/.env' });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require('./model/userModel');

const app = express();
app.use(express.json());
app.use(cors());

const connection_string = process.env.CONNECTION_STRING;
mongoose.connect(connection_string);

app.post('/login', (req, res) =>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success");
            } else{
                res.json("incorrect password!");
            }
        } else{
            res.json("User not found");
        }
    })
})

app.post('/signup', (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.listen(3001, () =>{
    console.log("server is running");
});