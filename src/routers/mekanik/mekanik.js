const express = require('express');
const {Mekanik} = require('../../models');
const {mekanikSchema} = require('../../schema');
const router = express.Router();

router.post('/mekanik', async(req, res) =>{
    try {
        const {error, value } = mekanikSchema.validate(req.body);
        if (error){ 
            throw new Error(error.message);
        }
        const {
            namaMekanik,
            spesialis
        } = value;

        const montir = new Mekanik({
            namaMekanik,
            spesialis
        });

        await montir.save()
        res.send({namaMekanik, spesialis});
    }catch(e){
        res.send({message: e.message})
    }
});


module.exports = router;

