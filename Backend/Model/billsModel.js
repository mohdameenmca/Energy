const mongoose = require("mongoose");


const billsSchema = new mongoose.Schema({
    billNo:{
        type:String,
        required:true
    },
    billDate:{
        type:Date,
        required:true
    },
    billStatus:{
        type:String,
        required:true
    },
    energyUsage:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    }
})

const billModel = mongoose.model("energyBill",billsSchema);

module.exports = billModel;
