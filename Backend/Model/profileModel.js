const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gasno: {
        type: String,
        required: true
    },
    Ebno: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    }
    // energyType: {  
    //     type: String,
    //     required: false
    // },
    // energyLevel: {  
    //     type: String,
    //     required: false
    // }
});

const profileModel = mongoose.model('Profile', profileSchema);

module.exports = profileModel;
