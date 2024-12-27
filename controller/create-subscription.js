const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');

const createSubscription = async (req, res) => {
    const { customerId, priceId } = req.body;

  try {
    const subscription = await stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        trial_period_days: 30,  
        expand: ['latest_invoice.payment_intent'],
      });

    res.status(200).send(subscription);
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).send({ error: error.message });
  }
};

module.exports = { createSubscription };
