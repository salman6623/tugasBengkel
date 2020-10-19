const pengunjung = require('./pengunjung');
const mekanik = require('./mekanik');
const routers = [ //users untuk membuat banyak // routers adalah kumpulan data yg berisi array
//  fungsi titik 3 mengcopy semua data yg ada di lama users masuk ke routers
    ...pengunjung,
    ...mekanik
];


const router = (app) => { //merubah yang tadinya bertulisan app.post menjadi router.post, router.get dan   
    app.use(routers);
};

module.exports = router; // fungsi dari module.exports agar file bisa diakses dari luar 