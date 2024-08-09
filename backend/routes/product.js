const express = require('express')
const { getproducts, newProduct, getSingleProduct } = require('../controllers/productController')
const router = express.Router()

router.route('/products').get(getproducts)
router.route('/product/new').post(newProduct)
router.route('/product/:id').get(getSingleProduct)

module.exports = router