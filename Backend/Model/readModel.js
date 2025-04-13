const mongoose = require("mongoose");

const readSchema = new mongoose.Schema({
    energyType:{
        type:String,
        required:true
    },
    energyLevel:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    }

})

const readModel = mongoose.model("Reading",readSchema);

module.exports= readModel;