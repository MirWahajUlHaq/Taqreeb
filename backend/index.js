require('dotenv').config({ path: __dirname + '/.env' });
require('./Server/Connection/connection');
// routers
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const port = process.env.PORT
const app = express()
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(express.static('public'))


app.use('/Server/Images', express.static(__dirname + '/Server/Images/'));

const auth = require('./Server/Routes/Auth/auth');
const admin = require('./Server/Routes/Admin/admin');

const user = require('./Server/Routes/User/user');
const vendor = require('./Server/Routes/Vendor/vendor');
const payment = require('./Server/Routes/payments/payment');

// const rooms = require('./Server/Routes/Rooms/room');

// const items = require('./Server/Routes/Items/item');



 app.use(process.env['API_V1'] + "auth", auth);
 app.use(process.env['API_V1'] + "admin", admin);
 app.use(process.env['API_V1'] + "user", user);
 app.use(process.env['API_V1'] + "vendor", vendor);
 app.use(process.env['API_V1'] + "payment", payment);






app.listen(port, () => {
    console.log(`server running on port ${port}`);
});




