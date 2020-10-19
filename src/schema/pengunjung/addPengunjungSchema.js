const Joi = require('joi');

const addPengunjungSchema = Joi.object({
    namaCustomer: Joi.string()
        .max(50)
        .required(), 
    nomerPlat: Joi.string()
        .required()
        .max(20), 
    jenisKendaraan: Joi.string()
        .required()
        .max(15),
    merkKendaraan: Joi.string()
        .required(),
    namaMobil: Joi.string()
        .required(),
    kerusakan: Joi.string()
        .required(),
    nim: Joi.string()
        .required(),
    
});

module.exports = addPengunjungSchema;
