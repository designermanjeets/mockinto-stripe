const express = require('express');
const { createCustomer } = require('../controller/create-customer');  
const {createSubscription} = require('../controller/create-subscription');
const {getStripeProducts} = require('../controller/get-products');
const {createSubscriptionCheckout} = require('../controller/create-session-checkout');
const {deleteSubscription} = require('../controller/delete-subscription');
const {updateSubscription} = require('../controller/update-subscription');
const {getStripePlans} = require('../controller/get-plan');
const {getSession} = require('../controller/get-session');
const {getSubscription} = require('../controller/get-subscription')
const {submitTicket} = require('../controller/submit-ticket');
const {DowngradeSubscription} = require('../controller/downgrade-subscription');
const { chargesList } = require('../controller/charges-list');



const router = express.Router();

// Define the route
router.post('/create-customer', createCustomer);
router.post('/create-subscription',createSubscription);
router.get('/get-products', getStripeProducts); 
router.post('/checkout',createSubscriptionCheckout);
router.delete('/delete-subscription/:subscriptionId', deleteSubscription);
router.put('/update-subscription/:subscriptionId', updateSubscription);
router.get('/get-plans',getStripePlans);
router.post('/get-session', getSession);
router.post('/get-subscription', getSubscription);
router.post('/submit-ticket', submitTicket); 
router.post('/downgrade-subscription',DowngradeSubscription);  
router.get('/charges-list',chargesList) 


const {getPayments} = require('../controller/get-payments');



module.exports = router;
