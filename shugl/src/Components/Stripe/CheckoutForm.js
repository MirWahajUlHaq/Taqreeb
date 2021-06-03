import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements, ElementsConsumer } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutForm(props) {


  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [needToredirect, setNeedToredirect] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (props.needToredirect == undefined) {
      setNeedToredirect(true);
    } else {
      setNeedToredirect(false);
    }
  });
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
    hidePostalCode: false,
  };

  const handleChange = async (event) => {
    //console.log(event.value);
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
  };


  const cancelRequest = () => {
    props.onCancel(false);
  }

  const handleSubmit = async (ev) => {
    //console.log (props.secret());
    ev.preventDefault();
    setProcessing(true);
    let userDetails = JSON.parse(localStorage.getItem("userDetails") );
    
    const payload = await stripe.confirmCardPayment(props.secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          // email : userEmail,
          address : {
            line1: '#123 sector 20 ',
            postal_code: '16002',
            city: 'chandigarh',
            state: 'chandigarh',
            country: 'IN',
          },
          name: userDetails.name
        },
      },
    });

    if (payload.error) {
      setError();
      toast(`Payment failed - ${payload.error.message}`, { type: "error" });
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setDisabled(true);
      props.onClick(payload);
      toast("Thank you for your payment..!", {
        type: "success",
      });

      if (needToredirect) {
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      }

      setSucceeded(true);
    }
  };
  return (
    <div
      
    >
      <form
        id="payment-form"
        onSubmit={handleSubmit}
       
      >
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          disabled={processing || disabled || succeeded}
          id="submit"
          className="btn-primary mt-2"
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        <button
          id="cancel"
          className="btn-secondary mt-2"
          onClick={cancelRequest}
        >
          <span id="button-text">
            Cancel
          </span>
        </button>

        <div className="text-center mt-4"></div>

        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        {/* <p className={succeeded ? "result-message" : "result-message hidden"}>
				Payment succeeded, see the result in your
				<a href={`https://dashboard.stripe.com/test/payments`}>
					{" "}
					Stripe dashboard.
				</a>{" "}
				Refresh the page to pay again.
			</p> */}
      </form>
    </div>
  );
}

const InjectedCheckoutForm = () => {
  return (
    <ElementsConsumer>
      {({elements, stripe}) => (
        <CheckoutForm elements={elements} stripe={stripe} />
      )}
    </ElementsConsumer>
  );
};
