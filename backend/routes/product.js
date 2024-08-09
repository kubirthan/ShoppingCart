const express = require('express')
const { getproducts, newProduct } = require('../controllers/productController')
const router = express.Router()

router.route('/products').get(getproducts)
router.route('/product/new').post(newProduct)

module.exports = router