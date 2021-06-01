const Product = require('../models/product')
const { errorHandler } = require('../helpers/dbErrorHandler')
const shortid = require('shortid')
const slugify = require('slugify')
const _ = require('lodash')


var ObjectId = require('mongodb').ObjectId;

exports.createProduct = (req, res) => {
    console.log(req.body)

    const { name, price, description, category, createdBy } = req.body
    if (!name || !price || !description || !category || !createdBy) {
        return res.status(400).json({
            error: "All fields are required"
        })
    }

    let productPictures = [];

    if (req.files.length > 0) {
        productPictures = req.files.map(file => {
            return { img: file.filename }
        })
    }
    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        description,
        productPictures,
        category,
        createdBy: req.user._id
    })

    product.save(((err, product) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        if(product)
        res.status(200).json({
            product
        })
    }))


}


// exports.productById = (req, res, next, id) => {
//     Product.findById(id).exec((err, product) => {
//         if (err || !product) {
//             return res.status(400).json({
//                 error: "Product Not Found"
//             })
//         }
//         req.product = product
//         next()
//     })
// }


// exports.read = (req, res) => {
//     req.product.photo = undefined
//     return res.json(req.product)
// }


exports.remove = (req, res) => {
    let product = req.product
    product.remove((err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            deletedProduct,
            message: "Product has been successfully deleted"
        })
    })
}


//Problem with update method


exports.update = (req, res) => {
    console.log(req)
    Product.findOne({ _id: req.product.id }, (err, product) => {
        console.log(req.product)
        product.name = req.body.name,
            product.price = req.body.price,
            product.description = req.body.description,
            product.category = req.body.category
        console.log(product.name)

        product.save(function (err, product) {
            if (err) {
                return res.status(400).json({
                    error: "Some error occured while updating"
                })
            }
            return res.status(200).json({
                product
            })
        })
    })
}

exports.getProducts = async (req, res) => {

    const vendorId = req.decoded._id;



    const products = await Product.find({ "createdBy": ObjectId(vendorId) })
      .select("name price description productPictures category")
      .populate({ path: "category", select: "_id name" })
      .exec();
  
    res.status(200).json({ products });
  };