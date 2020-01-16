const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');



// all routes 
const userRoutes = require('./api/routes/user');
const billRoute = require('./api/routes/bill');
const accountBill = require('./api/routes/accountBill');





// mongoDb connection
mongoose.connect('mongodb+srv://ssBricks:ssBricks@ssbricks-iqnn3.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true});

mongoose.connection.on('error',err=>{
    console.log('connection failed')
})

mongoose.connection.on('connected',()=>{
    console.log('connected successfully with database')
})

app.use(cors());


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/user',userRoutes);
app.use('/bill',billRoute);
app.use('/ss-account',accountBill);






// error if any one will hit bad url
app.use((req,res,next)=>{
    res.status(404).json({
        Error:'url not found'
    })
})

module.exports = app;