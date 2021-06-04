const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


exports.createPaymentIntent = async (req, res) => {
    
	const { items } = req.body;
	// Create a PaymentIntent with the order amount and currency
	const paymentIntent = await stripe.paymentIntents.create({
		amount: items[0].amount,
		currency: "USD",
		description: "Credit Purchase",
	});
	res.send({
		clientSecret: paymentIntent.client_secret,
	});
};