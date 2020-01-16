const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    partyName:String,
    partyAdd1:String,
    partyAdd2:String,
    city:String,
    state:String,
    country:String,
    pin:String,
    partyPanNo:String,
    email:String,
    phone:String,
    taxInvoiceNo:String,
    dateOfBill:String,
    quantity:[{
        no:String
    }],
    totalQuantity:Number,
    rate:String,
    gst:String,
    gstPercent:String,
    sgst:String,
    sgstPercent:String,
    shippingDetailPlace:String,
    vehicleNo:String,
    vehicleType:String,
    basicValue:Number,
    gst:Number,
    sgst:Number,
    grossTotal:Number
});

module.exports = mongoose.model('Bill',billSchema);