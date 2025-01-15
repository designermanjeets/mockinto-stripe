const express = require('express');
const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');
const app = express();

app.use(express.json());

const deleteSubscription = async (req, res) => {
    const { subscriptionId } = req.params; 

    try {
        if (!subscriptionId) {
            return res.status(400).json({ success: false, message: 'Subscription ID is required.' });
        }

        const deletedSubscription = await stripe.subscriptions.cancel(subscriptionId);

        res.status(200).json({ success: true, deletedSubscription });
    } catch (error) {
        console.error('Error deleting subscription:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { deleteSubscription };  


