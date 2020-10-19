const Joi = require('joi');

const mekanikSchema = Joi.object({
    namaMekanik: Joi.string()
    .min(5)
    .max(50)
    .required(),
    spesialis: Joi.string()
    .required()
});

module.exports = mekanikSchema;