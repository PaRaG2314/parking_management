const express=require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDb=require("./config/dbConnections");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require('./routes/userRoutes');
const parkingRoutes=require('./routes/parkingSpace');
const dotenv = require("dotenv");


dotenv.config();

const app=express();
const port=process.env.PORT || 5000;

connectDb(); //jo service bnyi h use  call kra h 

// Middleware
app.use(bodyParser.json());

app.use(cors());

// Routes
app.use('/api', userRoutes);
// Use the parking routes
app.use('/api/parking', parkingRoutes);



app.get('/',(req,res) => {
    res.send("working");
});

app.listen(port,() =>{
    console.log(`server running on port http://localhost:${port}`);
  });