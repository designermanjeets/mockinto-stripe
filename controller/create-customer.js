const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');
const createCustomer = async (req, res) => {
  try {
    const { name, email } = req.body;

    const customer = await stripe.customers.create({
      name,
      email,
    });
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { createCustomer }; 


























