const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        maxLength: [100, "Product name cannot exceed 100 characters"]
    },
    price : {
        type: Number,
        default: 0.0
    },
    description : {
        type:String,
        required: [true, "please enter product description"],
    },
    rating: {
        type: String,
        default: 0
    },
    images : [
        {
            image : {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "please enter product category"],
        enum: {
            values: [
                "Electronics",
                "Mobile Phones",
                "laptops",
                "Accessories",
                "headphones",
                "Food",
                "Books",
                "Clothes/Shoes",
                "Beauty/Health",
                "Sports",
                "Outdoor",
                "Home"
            ],
            message : "Please select correct category"
        }
    },
    seller: {
        type: String,
        required: [true, "Please enter product seller"]
    },
    stock: {
        type: Number,
        required: [true, "please enter product stock"],
        maxLength: [20, "Prodct stock cannot exceed 20"]
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const schema = mongoose.model('Product', productSchema)

module.exports = schema