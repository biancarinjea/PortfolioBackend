const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require("cors");
require('dotenv/config');

const app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
    );
    if (req.method === "OPTIONS") {
    return res.status(200).end();
    }
    next();
    });

app.use(bodyParser.json());

const clientRoute = require('./routes/clients');
const priceRoute = require('./routes/prices')

app.use('/clients',clientRoute);
app.use('/prices',priceRoute);


app.get('/',(req,res) => {
    res.send('We are on home');
})

//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
        console.log("connected to DB!")
    }
);

app.listen(3000);