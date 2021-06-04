import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Layout from "../core/Layout";
import { Form, Container } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
//import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Components/Stripe/CheckoutForm";
import "../Components/Stripe/style.css";
import { global } from "../config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import axios from "axios";
const promise = loadStripe(global.STRIPE_PUBLIC_KEY);

export const CheckOut = () => {

  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [redirctTo, setRedirctTo] = useState(false);
  const [product, setProduct]  = useState([]);

  const [values, setValues] = useState({
    streetAddress: "",
    houseNumber: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });


  const { streetAddress, houseNumber, city, state, zip, country } = values;


  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };


  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "10ch",
      },
    },
  }));

  const toggleCollepse = () => {

    if(values.streetAddress == ""){
      toast.error("Fill your street address..!")
      return false;
    }
    if(values.houseNumber == ""){
      toast.error("Fill your house number..!")
      return false;
    }
    if(values.city == ""){
      toast.error("Fill your city..!")
      return false;
    }

    if(values.state == ""){
      toast.error("Fill your state..!")
      return false;
    }
    if(values.zip == ""){
      toast.error("Fill your zip code..!")
      return false;
    }
    setIsOpen((isOpen) => !isOpen);

    // if (clientSecret == "") {
      window
        .fetch(global.API_HOST + "payment/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [{ id: "credits", amount: product.price * 100 }],
          }),
        })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setClientSecret(data.clientSecret);

          console.log("clientSecret", data.clientSecret);
        });
    //}
  };

  const handleToken = async (token) => {
    var productData = { ...product };
    var headers = {
      'Authorization': 'Bearer '+localStorage.getItem("token"),
      'Content-Type' : 'application/json'
    }

    const response = await axios.post(
        global.API_HOST + "user/orderProduct",
        {
          transactionID: token.paymentIntent.id,
            productId : product.productId,
            startDate: productData.startDate,
            endDate:productData.endDate,
            streetAddress: streetAddress,
            city: city,
            zip: zip,
            price: productData.price,
            country:"Pakistan",
            state:state,
        },
        { headers: headers }
    );
    console.log(response);
    localStorage.removeItem("product");
    // const { status } = response.data;
  };

  const handleCancel = async (request) => {
    //console.log(request)
    setIsOpen((isOpen) => !isOpen);
  };
  useEffect(() => {
    if (!localStorage.getItem("token") && localStorage.getItem("token") == null ) {
      setRedirctTo(true)
      //return <Redirect to="/signin" />
    } 

    if(!localStorage.getItem("product") && localStorage.getItem("product") == null){
      redirect();
    }else{
      setProduct( JSON.parse(localStorage.getItem("product")) );
    }
        // Update the document title using the browser API
  }, [isOpen]);


  const redirect = () => {
    history.push("/");
  };


  if(redirctTo){
    return <Redirect to="/signin" />
  }

  const confirmationBooking = () => (
    <div>
      <h4>Confirm and Pay</h4>
      <div className="row">
        <div className="col col-md-3">
          <h6>Dates</h6>
          <p color="text-muted">{`${product.startDate}- ${product.endDate}`}</p>
        </div>
        <div className="col col-md-3">
          {/* <h7>Edit</h7> */}
        </div>
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
              Price Details
            </Typography>

            <div className="row" style={{ marginTop: "2rem" }}>
              <div className="col col-md-5">
                <p>{product.productName}</p>
              </div>
              <div className="col col-md-2" style={{ marginLeft: "7rem" }}>
                <p>{`USD.${product.price}/-`}</p>
              </div>
            </div>
            <div className="row" style={{ marginTop: "1rem" }}>
              <div className="col col-md-5">
                <p>Service fees</p>
              </div>
              <div className="col col-md-2">
                <div style={{ marginLeft: "7rem" }}>
                  <p>USD.0/-</p>
                </div>
              </div>
            </div>
            {!isOpen && (
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: "3rem",
                    width: "15rem",
                    height: "3rem",
                    marginBottom: "2rem",
                    marginLeft: "4rem",
                    marginRight: "4rem",
                    backgroundColor: "#D6324A",
                    color: "white",
                  }}
                  onClick={toggleCollepse}
                >
                  Confirm Payment
                </Button>
              </CardActions>
            )}
          </CardContent>
          <div>
            {isOpen ? (
              <Card>
                <CardContent>
                  <Elements stripe={promise}>
                    <CheckoutForm
                      onClick={handleToken}
                      secret={clientSecret}
                      onCancel={handleCancel}
                    />
                  </Elements>
                </CardContent>
              </Card>
            ) : (
              ""
            )}
          </div>
        </Card>
      </div>

      <div className="row">
        <div className="col col-md-3">
          <h3>Pay with</h3>
        </div>
        <div className="col col-md-3">
          {/* <h6>Icons of easypaisa jazzcash credit and debit cards etc.</h6> */}
          <img src={global.imgUrl + 'Mastercard.png'} height="40" width="70" />
          <img src={global.imgUrl + 'visa.jpg'} height="40" width="50" />
        </div>
      </div>
      {/* <div className="row">
        <div className="col col-md-6">
          <Form.Control as="select">
            <option>Credit or Debit Card</option>
            <option>EasyPaisa</option>
            <option>JazzCash</option>
          </Form.Control>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-3">
          <Form.Control type="text" placeholder="Expiration" />
        </div>
        <div className="col col-md-3">
          <Form.Control type="text" placeholder="CVV" />
        </div>
      </div> */}
      <div className="row">
        <div className="col col-md-6">
          <Form.Control type="text" placeholder="Street Address" onChange={handleChange("streetAddress")} value={streetAddress} />
          <Form.Control type="text" placeholder="Apt. or house number" onChange={handleChange("houseNumber")} value={houseNumber}/>
          <Form.Control type="text" placeholder="City" onChange={handleChange("city")} value={city}/>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-3">
          <Form.Control type="text" placeholder="State" onChange={handleChange("state")} value={state}/>
        </div>
        <div className="col col-md-3">
          <Form.Control type="text" placeholder="Zip" onChange={handleChange("zip")} value={zip}/>
        </div>
      </div>
      <br />
      <div className="row" style={{ marginTop: "1rem" }}>
        <div className="col col-md-6" style={{ marginTop: "1rem" }}>
          <label>Country</label>
          <Form.Control as="select" onChange={handleChange("country")} value={country}>
            <option>Pakistan</option>
          </Form.Control>
        </div>
      </div>
      <div className="row" style={{ marginTop: "2rem" }}>
        <div className="col col-md-6">
          <h4>Cancellation Policy</h4>
          <p color="text-muted">
            Free cancellation until 1:00 PM on Apr 24. After that, cancel before
            1:00 PM on Apr 25 and get a full refund, minus the first night and
            service fee.
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <Layout title="Checkout" description="Scene on hai!">
      <Container>{confirmationBooking()}</Container>
      <ToastContainer />
    </Layout>
  );
};
