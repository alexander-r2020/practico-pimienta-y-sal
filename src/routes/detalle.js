var express = require('express');
var router = express.Router();
const {detalle} = require('../controllers/detalleControllers')

/* GET users listing. */
router.get('/detalle',detalle );
router.get('/detalle/:id',detalle );

module.exports = router;
