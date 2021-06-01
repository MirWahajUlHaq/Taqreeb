const express = require('express')
const router = express.Router()
const multer = require('multer')
const crypto = require('crypto')
const mime = require('mime');
//const upload = multer({dest: 'uploads/'})
const shortid = require('shortid')
const path = require('path')
const { getProducts, createProduct, productById, read, remove, update } = require('../controllers/product')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user')

const middleWare=require('../Middleware/index');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})


var upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }
})

// router.get('/product/:productId', read);
router.post("/product/getProducts",middleWare.checkToken, getProducts);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, upload.array('product_pictures', 4), createProduct);
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove)
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update)


router.param('userId', userById);
// router.param('productId', productById)

module.exports = router;