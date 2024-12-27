const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');

const getStripePlans = async (req, res) => {
  try {
    const products = await stripe.plans.list({
      limit: 10, 
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getStripePlans };  
