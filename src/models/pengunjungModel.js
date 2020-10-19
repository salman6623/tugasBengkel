const mongoose = require('mongoose');

const pengunjungModel = new mongoose.Schema({
    namaCustomer:{
        type: String,
        required: true,
        maxlength: 50 
    },
    nomerPlat:{
        type: String,
        required: true,
        maxlength: 20 
    },
    jenisKendaraan:{
        type: String,
        required: true,
        maxlength: 15
    },
    merkKendaraan:{
        type: String,
        required: true
    },
    namaMobil: {
        type: String,
        required: true
    },
    kerusakan:{
        type: String,
        required: true
    },
    nim: String,

})

const Pengunjung = mongoose.model('Pengunjung', pengunjungModel);

module.exports = Pengunjung;