const Cart = require('../models/cart')

exports.addItemToCart = (req, res) => {
    
    Cart.findOne({user:req.profile._id})
    .exec((err, cart) => {
        if(err) return res.status(400).json({err});
        if(cart) {
            const product = req.body.cartItems.product;
            const isItemAdded = cart.cartItems.find(c => c.product ==req.body.cartItems.product)
            if(isItemAdded) {
                return res.status(400).json({
                    message:"Cannot add similar service twice"
                })
            } else {
                Cart.findOneAndUpdate({user:req.profile._id}, {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                })
                .exec((err, _cart)=> {
                    if(err) {
                        return res.status(400).json({err});
                    }
                    if(_cart) {
                        return res.status(201).json({cart:_cart})
                    }
                })
            }
            
            //res.status(200).json({message:cart });
        }else {
            const cart = new Cart({
        
                user:req.profile._id,
                cartItems: [req.body.cartItems]
            })
        
            cart.save((err, cart)=> {
                if(err) {
                    return res.status(400).json({err})
                }
                res.status(200).json({cart})
            })
        }
    })

    
}