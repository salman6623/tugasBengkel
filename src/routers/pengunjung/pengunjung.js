const express = require('express');
const mongoose = require('mongoose');
const { Pengunjung, Mekanik } = require('../../models');
const { addPengunjungSchema } = require('../../schema');
const router = express.Router();

router.post('/admin', async(req, res) => {
    try {
        const { error,value }= addPengunjungSchema.validate(req.body);
        const {namaCustomer, nomerPlat, jenisKendaraan, merkKendaraan, namaMobil, kerusakan, nim} = value;

        if (error){
            throw new Error(error.message);
        }
        const customer = await Mekanik.findOne({ _id: mongoose.Types.ObjectId(nim)});
        if (!customer) {
            throw new Error('nim tidak valid');
        }
        
        const pengunjung = new Pengunjung({
            namaCustomer, 
            nomerPlat,
            jenisKendaraan,
            merkKendaraan,
            namaMobil,
            kerusakan,
            nim
        });

        await pengunjung.save();
        res.send({namaCustomer, nomerPlat, jenisKendaraan, merkKendaraan, namaMobil, kerusakan, nim})

    }catch(e){
        res.send({message: e.message});
    }
        
});

module.exports = router;