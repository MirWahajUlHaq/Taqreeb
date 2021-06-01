// exports.userSignupValidator = (req, res, next) => {
//     req.check('firstName', 'firstName is required').notEmpty()
//     req.check('lastName', 'lastName is required').notEmpty()
//     req.check('email', 'Email must be between 3 to 32 characters')
//         .matches(/.+\@.+\..+/)
//         .withMessage('Email must contain @')
//         .isLength({
//             min:4,
//             max:32
//         });
//     req.check('phone', 'Number is required').notEmpty()
//     req.check('phone', 'Phone Number must be 11 digits')
//     .isLength({
//         min:11
//     })
//     req.check('password', 'Password is required').notEmpty()
//     req.check('password')
//     .isLength({min:6})
//     .withMessage('Password must contain atleast 6 characters')
//     .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
//     .withMessage('Password must contain at least one capital alphabet, a special character, and a number');
//     const errors = req.validationErrors();
//     if(errors) {
//         const firstError = errors.map(error => error.msg)[0]
//         return res.status(400).json({error:firstError});
//     }
//     next();
// }