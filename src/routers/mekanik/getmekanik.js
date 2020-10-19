const express = require('express');

const {Mekanik} = require('../../models');

const router = express.Router();

router.get('/get/mekanik', async(req, res) =>{
    try {
        const data = await Mekanik.find();
        res.send(data);
    }catch(e){
        res.send({message: e.message});
    }
})

module.exports = router;