const express = require('express');
const router = express.Router();
const Price = require('../models/Price');
const CalculatorAnswers = require('../models/CalculatorAnswers');

//get all prices
router.get('/',async (req,res) => {
    try{
        const prices = await Price.find()
        res.json(prices);
    }catch(err){
        res.json({message:err});
    }
});
//save calculator
router.post('/save', async (req,res) => {
    const project = new CalculatorAnswers({
        name: req.body.name,
        email: req.body.email,
        yourProject: req.body.yourProject
    });
    try{
        const savedProject = await project.save()
        res.json(savedProject)
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;