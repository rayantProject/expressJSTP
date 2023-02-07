const express = require('express');

const app = express();

const stuffRoutes = require('./stuffRoutes');
const userRoutes = require('./userRoutes');
// const testRoutes = require('../test/requestRoute');
const mongoose = require('mongoose');


const dotenv =  require('dotenv');
dotenv.config();

// console.log(process.env.DB_URI);
mongoose.connect(process.env.DB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(() => console.log('Connection failed'));


app.use ( (req, res, next) =>  {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
// app.use('/api/test', testRoutes);


module.exports = app;