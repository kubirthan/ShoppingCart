const express = require('express')
const { getproducts, newProduct, getSingleProduct, updateProduct } = require('../controllers/productController')
const router = express.Router()

router.route('/products').get(getproducts)
router.route('/product/new').post(newProduct)
router.route('/product/:id')
                            .get(getSingleProduct)
                            .put(updateProduct)

module.exports = router