require('dotenv').config();
const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');

module.exports = stripe;
