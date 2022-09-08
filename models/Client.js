const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:String,
        required: true
    },
    messageTitle:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Clients',ClientSchema)