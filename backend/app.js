const express = require("express");
const mongoose = require("mongoose");
const morgan = require("body-parser");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const path = require("path");
const cors = require("cors");

//app
const app = express();
require("dotenv").config();

//import routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const vendorRoutes = require("./routes/vendor/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");
// const initialDataRoutes = require("./routes/admin/initialData");
//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected"));

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(expressValidator());
//routes middleware
app.use("/api", adminRoutes);
app.use("/api", vendorRoutes);
app.use("/api", authRoutes);
// app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
// app.use("/api", initialDataRoutes);


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
