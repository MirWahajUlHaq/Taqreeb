var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport');

const sendEmail = (to, subject, message, from=null, callback) => {
    var mailConfig = {
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
            user: process.env['SENDGRID_API'],
            pass: process.env['SENDGRID_API_KEY']
        }
    };
    var mailOptions = {
        from    :'no-reply@Email.com',
        to      : to, 
        subject : subject, 
        html    : message 
    };
    let transporter = nodemailer.createTransport(mailConfig);
    return new Promise((resolve,reject)=>{
        transporter.sendMail(mailOptions)
        .then((info)=>{
            resolve(true,info)
        })
        .catch((err)=>{
            resolve(false,err)
        })
    })
}

const sendEmailTest =async (email)=>{

    
      var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user:  process.env['EMAIL'],
            pass:  process.env['EMAIL_PASSWORD']
        }
      }));
      
      var mailOptions = {
        from: 'Waha@gmail.com',
        to: email,
        subject: 'Product Order',
        text: 'Your Order has been placed'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {

          return false;
        } else {
          return true;
        }
      });


}



module.exports = {sendEmail, sendEmailTest}