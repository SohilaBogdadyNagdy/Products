var express = require('express');
var productsController = require('../controllers/productsController');

var router = express.Router();

router.get('/search/:filter/:term', productsController.search_results);


module.exports = router;
