const express = require('express');

const {Pengunjung, Mekanik} = require('../../models');

const router = express.Router();

const getNim = async (id, model) => {
    const result = await model.findById(id);
    return result;
}

router.get('/get/admin', async(req, res) =>{
    try {
        const result = await Pengunjung.find({});
        const promises = await Promise.all(result.map(async el =>{
            return {
                namaCustomer: el.namaCustomer,
                nomerPlat: el.nomerPlat,
                jenisKendaraan: el.jenisKendaraan,
                merkKendaraan: el.merkKendaraan,
                namaMobil: el.namaMobil,
                kerusakan: el.kerusakan,
                nim: await getNim(el.nim, Mekanik)
            }
        }));
        res.send(promises);
    }catch(e) {
        res.send({message: e.message});
    }
});

module.exports = router;