const express = require('express');
const cors = require('cors');
const helmet = require("helmet");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet())

// Connect to MongoDB
require("./config/db");


const mongoose = require("mongoose");
const Sector = require('./models/Sectors');



const sector = new Sector({
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
});
// Routes
app.use("/auth", authRoutes);
// Add your routes and middleware here

  

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));