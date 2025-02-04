const express = require('express'); // Add this line to import Express

const stripe = require('stripe')('sk_test_51QA7S8AWH1At8PiUzUgL0hKv5UQyQ4lpQuDWLdwMvk8iSxbviNDzTfCAEZOgF5DXMI7IZFiXR9ikaZ2YTrDxH0PQ00GsKMNpLf');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json())



const DowngradeSubscription = async (req, res) => {
   
    const data = req.body;
    console.log('data--------->',data)
    try{
    const subscription = await stripe.subscriptions.retrieve(data?.subscriptionId);  
    const schedule = await stripe.subscriptionSchedules.create({
        from_subscription: data?.subscriptionId // Attach to existing subscription
    });

    console.log("Subscription Schedule Created:", schedule.id);

    const updatedSchedule = await stripe.subscriptionSchedules.update(schedule.id, {
        phases: [
            {
                items: schedule.phases[0].items, // Keep the current plan active
                start_date: schedule.phases[0].start_date,
                end_date: schedule.phases[0].end_date
            },
            {
                items: [{ price: data?.priceId, quantity: 1 }], // New plan after billing cycle
                start_date: schedule.phases[0].end_date
            }
        ]
    });
    console.log("Subscription Schedule Updated:", updatedSchedule.id);
    res.status(200).send({ status:true,message: "Subscription Downgraded Successfully" });
    }catch (error) {
        res.status(200).send({status:false, error: error.message });
      } 
};

module.exports = { DowngradeSubscription };

