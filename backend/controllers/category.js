const Category = require('../models/category')
const { errorHandler } = require('../helpers/dbErrorHandler')
// const slugify = require('slugify')

exports.create = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        // slug: `${slugify(req.body.name)}-${shortid.generate()}`
    }

    // if (req.file) {
    //     // categoryObj.categoryImage = process.env.API + '/public/' + req.file.originalname;
    //     // console.log(categoryObj)
    //     categoryObj.categoryImage = "/public/" + req.file.filename;
    // }


    const cat = new Category(categoryObj);
    console.log(cat)
    cat.save((err, category) => {
        if (err) {
            return res.status(400).json({
                err
            })
        }
        if (category) {
            return res.status(201).json({ category });
        }
    });
};


exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            res.status(400).json({
                error: 'Category does not exist'
            })
        }
        req.category = category;
        next()
    })
}


exports.read = (req, res) => {
    return res.json(req.category)
}

exports.update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}

exports.remove = (req, res) => {
    const category = req.category;
    category.remove((err, data) => {
        if (err) {
            res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Category deleted"
        })
    })
}

exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}