const mongoose = require('mongoose');

ssAccountSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    partyName:String,
    phone:Number,
    total:Number,
    paid:Number,
    lastPay:Number,
    lastPayDate:String
})

module.exports = mongoose.model('SsAccount',ssAccountSchema);