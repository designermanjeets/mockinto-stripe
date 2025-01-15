const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');


const chargesList = async (req, res) => {
    try {
        const { email } = req.params;
        if (!email){
            res.json({"error":"No email is getting here"})
        }
        const charges = await stripe.charges.list({
            limit: 100,
        });
        const filteredCharges = charges.data.filter(charge => 
            charge.billing_details.email === email
        );
        res.json(filteredCharges);
        // res.json(charges);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving payment history');
    }
};

module.exports = { chargesList };


