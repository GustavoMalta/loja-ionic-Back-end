var express = require('express');
var router = express.Router();
var controller = require('../controllers/arquivo')(/* construtor */);


router.put('/', controller.gravar);


module.exports = router;

