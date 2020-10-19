const pengunjungSchema = require('./pengunjung');
const mekanikSchema = require('./mekanik');

module.exports = {
    ...pengunjungSchema,
    ...mekanikSchema
};