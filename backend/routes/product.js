const express = require('express')
const { getproducts } = require('../controllers/productController')
const router = express.Router()

router.route('/products').get(getproducts)


module.exports = router