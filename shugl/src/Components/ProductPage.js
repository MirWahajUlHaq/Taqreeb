import { React, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Layout from "../core/Layout";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Row, Col, Image } from "react-bootstrap";
import farmImage from "../images/Farmhouse/alHadiFarmHouse.jpg";
import farmImage1 from "../images/Farmhouse/farmImage1.webp";
import farmImage2 from "../images/Farmhouse/jbFarmHouse.jpg";
import farmImage3 from "../images/Farmhouse/farmImage3.webp";
import farmImage4 from "../images/Farmhouse/farmImage4.webp";
import farmImage5 from "../images/Farmhouse/farmImage5.webp";
import axios from "axios";
import { global } from "../config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductPage = (props) => {
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);

  const history = useHistory();

  const [values, setValues] = useState({
    checkIn: "",
    checkOut: "",
  });

  const { checkIn, checkOut } = values;

  useEffect(() => {
    getSingleProduct(props.match.params.id);
  },[props.match.params.id]);

  const getSingleProduct = (id) => {
    axios
      .post(global.API_HOST + "user/singleProduct", {
        productId: id,
      })
      .then((response) => {
        if (response.data.status == true) {
          setProduct(response.data.data.productDetails);
          setReviews(response.data.data.reviews);
        }
      })
      .catch((err) => console.log(err));
  };

  const images = () => (
    <>
      <Row style={{ marginBottom: "2rem" }}>
        <Col xs={12} style ={{textAlign:'center'}} >
          <Image
            src={global.imgUrl+ product.productImage}
            style={{
              height: "300px",
              maxWidth: "105%",
              maxHeight: "100%",
            
            }}
          />
        </Col>
        {/* <Col xs={6} md={2}>
          <Image
            src={farmImage1}
            style={{ height: "145px", maxWidth: "110%", maxHeight: "100%" }}
          />
          <Image
            src={farmImage2}
            style={{
              height: "145px",
              marginTop: "10px",
              maxWidth: "110%",
              maxHeight: "100%",
            }}
          />
        </Col>
        <Col xs={6} md={2}>
          <Image
            src={farmImage3}
            style={{ height: "145px", maxWidth: "110%", maxHeight: "100%" }}
          />
          <Image
            src={farmImage4}
            style={{
              height: "145px",
              marginTop: "10px",
              maxWidth: "110%",
              maxHeight: "100%",
            }}
          />
        </Col>

        <Col xs={6} md={4}>
          <Image
            src={farmImage5}
            style={{
              height: "300px",
              maxWidth: "105%",
              maxHeight: "100%",
              borderRadius: "0px 30px 30px 0px",
            }}
          />
        </Col> */}
      </Row>
    </>
  );
  const productNameAndPrice = () => (
    <div>
      <div className="row">
        <div className="col col-md-4">
          <h3>{product.productName}</h3>
          {/* <p>Malir Karachi, Pakistan</p> */}
        </div>
        <div
          className="col col-md-8"
          style={{ textAlign: "right", paddingRight: "2rem" }}
        >
          <h4>
            <b>{`USD.${product.productPrice}/- `}</b>
            {/* <p style={{ color: "grey" }}>/12hr</p> */}
          </h4>
        </div>
      </div>
    </div>
  );

  const userReviews = () => (
    <>
    <h4>Reviews</h4>
    {reviews && reviews.length > 0 ? (
      
      <div className="row">
        {reviews.map((review, index) => (
          <div class="col col-md-7">
          <h6>{review.reviewerName}</h6>
          <p>{review.review}</p>   
          </div>
        ))}
      </div>
    ): "No review found..!"}
    </>
  );

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "10ch",
      },
    },
  }));



  const handleInputChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
 

const handleSubmit = () => {
    if(values.checkIn == ""){
        toast.error("Fill you check-in date");
        return false;
    }
    if(values.checkOut == ""){
        toast.error("Fill you check-out date");
        return false;
    }
    let productData = {
        productId : product._id,
        productName: product.productName,
        price : product.productPrice,
        startDate : values.checkIn,
        endDate : values.checkOut,
    }

    if(localStorage.getItem('product')){
        localStorage.removeItem("product");
    }
    localStorage.setItem("product",  JSON.stringify(productData));
    setTimeout(function () {
        redirect();
        }, 500);
}

const redirect = () => {
    history.push("/view/checkout");
  };


  const productDescription = () => (
    <div className="row">
      <div className="col col-md-7">
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>
      <div className="row">
        <Card
          variant="outlined"
          style={{
            position: "absolute",
            right: "50px",
            width: "400px",
            height: "400px",
            maxWidth: "400px",
            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <CardContent>
            <Typography
              style={{ textAlign: "center", fontWeight: "bold" }}
              gutterBottom
            >
              Check Availability and Price
            </Typography>
            <form className={useStyles.root} noValidate autoComplete="off">
              <div style={{ marginTop: "2rem" }}>
                <label>Check-in Date</label>
                <input
                  name="Check-in date"
                  type="date"
                  /*disabled={this.state.mode}*/
                  value={checkIn}
                  className="form-control" 
                  onChange={handleInputChange('checkIn')}
                />
              </div>

              <div style={{ marginTop: "2rem" }}>
                <label>Check-out Date</label>
                <input
                  name="Check-out date"
                  type="date"
                  /*disabled={this.state.mode}*/
                  value={checkOut}
                  className="form-control" 
                  onChange={handleInputChange('checkOut')}
                />
              </div>
            </form>
            <CardActions>
              {/* <Link to="/view/checkout"> */}
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "3rem",
                    width: "11rem",
                    height: "3rem",
                    marginBottom: "2rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                    backgroundColor: "#D6324A",
                    color: "white",
                  }}
                  onClick={handleSubmit}
                >
                  Book Now
                </Button>
              {/* </Link> */}
              {/* <Link>
                                <Button variant='contained' color='primary' style={{ marginTop: '3rem', width: '11rem', height: '3rem', marginBottom: '2rem', marginLeft: '1rem', marginRight: '1rem', backgroundColor: '#D6324A', color: 'white' }}>Add to Cart</Button>
                            </Link> */}
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <Layout title="Shugl Porduct" description="Scene on hai!">
      <Container>
        {images()}
        {productNameAndPrice()}
        {productDescription()}
        {userReviews()}
      </Container>
      <ToastContainer />
    </Layout>
  );
};
