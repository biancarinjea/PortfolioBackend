const mongoose = require('mongoose');

const PriceSchema = mongoose.Schema({
    question:{
        type:String,
        required: true
    },
    price1:{
        type:Number,
        required: true
    },
    price2:{
        type:Number,
        required: true
    },
    price3:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Prices',PriceSchema)