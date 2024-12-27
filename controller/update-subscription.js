const express = require('express'); // Add this line to import Express

const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');
const app = express();
app.use(express.urlencoded({ extended: true }));


// Middleware to parse JSON request bodies
app.use(express.json())
const updateSubscription = async (req, res) => {
    const { subscriptionId } = req.params; 
    const { priceId} = req.body;  
    console.log("body",req.body)
    let payload = {
        items: [
            {
                "id":req.body.item,
                "price": priceId,  
            }
        ],
        
    };


    try {
        if (!subscriptionId || !priceId) {
            return res.status(400).json({
                success: false,
                message: 'Subscription ID, priceId, and customerId are required.',
            });
        }

        const updatedSubscription = await stripe.subscriptions.update(subscriptionId, payload);

        res.status(200).json({
            success: true,
            updatedSubscription,
        });
    } catch (error) {
        console.error('Error updating subscription:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { updateSubscription };

