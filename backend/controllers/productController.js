const Product = require('../models/productmodel')
const ErrorHandler = require('../utils/errorHandler')

//Get products - /api/v1/products
exports.getproducts = async(req,res,next)=> {
    const products = await Product.find()
    res.status(200).json({
        success : true,
        count: products.length,
        products
    })
}


//create product - /api/v1/product/new
exports.newProduct = async(req, res, next) => {
   const product = await Product.create(req.body)
   res.status(201).json({
    success: true,
    product
   })
}

//Get single product - /api/v1/product/:id
exports.getSingleProduct = async(req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(!product) {
        return next(new ErrorHandler('Product not found', 400))
    }

    res.status(201).json({
        success:true,
        product
    })
}

//update product - /api/v1/product:id
exports.updateProduct = async (req, res, next) => {
    let product =  await Product.findById(req.params.id)

    if(!product) {
        res.status(404).json({
            success: false,
            message: "Product not found"
        })
    }

    product = await  Product.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators: true
    })

    res.status(201).json({
        success: true,
        product
    })
}


//Delete product - /api/v1/product:id
exports.deleteProduct = async (req, res, next) => {
   const product = await Product.findById(req.params.id)

   if(!product) {
    res.status(404).json({
        success: false,
        message : 'product not found'
    })
   }

   await product.deleteOne()

   res.status(201).json({
    success: true,
    product
   })
}