
const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');

const getSubscription = async (req, res) => {
  try {
    const subscriptionId = req.body.subscriptionId;
    if (!subscriptionId) {
      return res.status(400).json({ error: 'Session ID is required' });
    }
    const session = await stripe.subscriptions.retrieve(subscriptionId);
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getSubscription };




