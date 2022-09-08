const express = require('express');
const router = express.Router();
const Post = require('../models/Client');

//save client
router.post('/save',async (req,res) => {
    const client = new Post({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        messageTitle: req.body.messageTitle,
        message: req.body.message
    })
    try{
        const savedClient = await client.save()
        res.json(savedClient)
    }catch(err){
        res.json({message: err});
    }

})
module.exports = router;