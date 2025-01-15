const express = require('express');
const customerRoutes = require('./routes/index'); 
const cors = require('cors');


const app = express();
app.use(cors());

app.use(express.json());  
// Use the customer routes
app.use('/api', customerRoutes); 


module.exports = app;  

