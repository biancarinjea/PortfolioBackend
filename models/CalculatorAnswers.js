const mongoose = require('mongoose');

const CalculatorAnswersSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    yourProject:{
        type:String,
        required: true
    }
});
module.exports = mongoose.model('CalculatorAnswers',CalculatorAnswersSchema);