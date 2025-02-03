const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'jatindersingla.netmax@gmail.com', 
        pass: 'uvolatcgkcxjnrvb',  
    }
});





const submitTicket = async (req, res) => {
    console.log(req.body)
    const data = req.body;
    const mailOptions = {
        from: 'jatindersingla.netmax@gmail.com', 
        to: 'jatindersingla.netmax@gmail.com',  
        subject: 'Ticket Submission', 
        text: data.message, 
        html: `<h1>${data.email}</h1><p>${data.message}</p>` 
    };


    const mailOptionsuser = {
        from: 'jatindersingla.netmax@gmail.com', 
        to: data.email,  
        subject: 'Ticket Submission', 
        text: "Thank you for submitting the ticket", 
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Contacting Us</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .header {
            background-color: #FF3D00;
            color: white;
            padding: 15px;
            font-size: 20px;
            font-weight: bold;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px;
            color: #333333;
            font-size: 16px;
            line-height: 1.5;
        }
        .footer {
            font-size: 14px;
            color: #666666;
            padding: 15px;
            border-top: 1px solid #ddd;
            text-align: center;
        }
        .button {
            display: inline-block;
            background-color: #FF3D00;
            color:#ffffff !important;
            padding: 12px 20px;
            border-radius: 5px;
            border: none;
            text-decoration: none;
            font-size: 16px;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            HrkMockinto
        </div>
        <div class="content">
            <p>Thank you for reaching out to <strong>HrkMockinto</strong>!</p>
            <p>We have received your message and our team will get back to you shortly.</p>
            <p>If you have any urgent inquiries, feel free to reply to this email.</p>
            <a href="mailto:support@hrkmockinto.com" class="button">Contact Support</a>
        </div>
        <div class="footer">
            &copy; 2025 HrkMockinto. All rights reserved.
        </div>
    </div>
</body>
</html>
` 
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    transporter.sendMail(mailOptionsuser, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


    res.status(200).json({ success: true, message: "Ticket submitted successfully" });
};
module.exports = { submitTicket };  

 