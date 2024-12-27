const express = require('express');
const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const createSubscriptionCheckout = async (req, res) => {
    console.log("hello...")
    console.log("reqy..",req.body);

    const { priceId, success_url, cancel_url, customerId ,mode} = req.body;
    let payload = {
        'line_items[0][price]' : req.body.price,
        'line_items[0][quantity]' : 1,
        'mode' : req.body.mode,
        'success_url': req.body.sucessUrl,
        'cancel_url' : req.body.cancelUrl

    }

    console.log("payload",payload)
  

    try {
        const session = await stripe.checkout.sessions.create({
        'line_items[0][price]' : req.body.price,
        'line_items[0][quantity]' : 1,
        'mode' : req.body.mode,
        'success_url': req.body.sucessUrl,
        'cancel_url' : req.body.cancelUrl,
        'customer' : req.body.customer
             
        });
        res.status(200).json({ success: true, sessionUrl: session});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


module.exports = { createSubscriptionCheckout };  

 