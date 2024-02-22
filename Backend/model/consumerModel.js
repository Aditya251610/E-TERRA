const mongoose = require('mongoose');

const ConsumerSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    phone:{
        type: String,
        require: true
    },

    amount:{
        type: String,
        require: true
    },

    price:{
        type: String,
        require: true
    }
});

const ConsumerModel = mongoose.model("consumerData", ConsumerSchema);
module.exports = ConsumerModel;