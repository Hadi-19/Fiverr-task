const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authRoutes = require("./routes/auth");
const sectorsRoutes=require("./routes/sectors")

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet())

// Connect to MongoDB
require("./config/db");



const Sectors = require('./models/Sectors');



/*const sector = new Sector({
  name:'Manufacturing',
  subsectors:[
    {name:'Construction materials'},
    {name:'Electronics and Optics'},
    {name:'Food and Beverage',
    subsectors:[
        {name:'Bakery & confectionery products'},
        {name:'Beverages'},
        {name:'Fish & fish products'},
        {name:'Meat & meat products'},
        {name:'Milk & dairy products'},
        {name:'Other'},
        {name:'Sweets & snack food'}
    ]},
    {name:'Fourniture',
    subsectors:[
        {name:'Bathroom/sauna'},
        {name:'Bedroom'},
        {name:'Children’s room'},
        {name:'Kitchen'},
        {name:'Living room'},
        {name:'Office'},
       {name:' Other (Furniture)'},
       {name:' Outdoor'},
        {name:'Project furniture'}
    ]}
  ]
});

sector.save((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Sector saved!");
  }
});*/





// Add this middleware function to verify the JWT
/*const verifyJWT = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

// Use the middleware on the routes that require authentication
app.get("/protected-route", verifyJWT, (req, res) => {
  res.send("Welcome to the protected route!");
});*/


// Routes
app.use("/auth", authRoutes);
app.use('/sectors',sectorsRoutes)
// Add your routes and middleware here

  

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));