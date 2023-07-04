const path = require('path');

const express = require('express');
const productsController = require('../controllers/products'); 

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const router = express.Router();


router.get('/', productsController.getProducts );

router.get('/contact', productsController.getcontact );

router.post('/contact', productsController.postcontact );

router.get('/success', productsController.getsuccess);


module.exports = router;
