const express = require('express')
const router = express.Router()
const multer = require('multer')
const crypto = require('crypto')
const path = require('path')
const { create, categoryById, read, update, remove, list } = require('../controllers/category')
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth')
const { userById } = require('../controllers/user')

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



router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, upload.single('category_image'), create);
router.post('/category/categoryId/:userId', requireSignin, isAuth, isAdmin, upload.single('category_image'), update);
router.delete('/category/categoryId/:userId', requireSignin, isAuth, isAdmin, upload.single('category_image'), remove);
router.get('/category/:categoryId', read)
router.get('/categories', list)
router.param('userId', userById);
router.param('categoryId', categoryById);

module.exports = router;