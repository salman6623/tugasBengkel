const mongoose = require('mongoose');

const mekanikModel = new mongoose.Schema({
    namaMekanik:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    spesialis: {
        type: String,
        unique: true,
        required: true
    },
});

const Mekanik = mongoose.model('Mekanik',mekanikModel);

module.exports = Mekanik;