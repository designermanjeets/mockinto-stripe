const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'support@mockinto.com', 
        pass: 'Mock1nt0@2025',  
    }
});

const submitTicket = async (req, res) => {
    console.log(req.body)
    const data = req.body;
    const mailOptions = {
        from: 'support@mockinto.com', 
        to: 'ss969856@gmail.com',  
        subject: 'Ticket Submission', 
        text: 'This is a test email sent using Nodemailer and Node.js.', 
        html: `<h1>${data.email}</h1><p>${data.message}</p>` 
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });



    res.status(200).json({ success: true, message: "Ticket submitted successfully" });
};
module.exports = { submitTicket };  

 