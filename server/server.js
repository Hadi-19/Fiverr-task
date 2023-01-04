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

Sectors.insertMany([
  {
      "value": "1",
      "text": "Manufacturing"
  },
  {
      "value": "19",
      "text": "    Construction materials"
  },
  {
      "value": "18",
      "text": "    Electronics and Optics"
  },
  {
      "value": "6",
      "text": "    Food and Beverage"
  },
  {
      "value": "342",
      "text": "        Bakery & confectionery products"
  },
  {
      "value": "43",
      "text": "        Beverages"
  },
  {
      "value": "42",
      "text": "        Fish & fish products"
  },
  {
      "value": "40",
      "text": "        Meat & meat products"
  },
  {
      "value": "39",
      "text": "        Milk & dairy products"
  },
  {
      "value": "437",
      "text": "        Other"
  },
  {
      "value": "378",
      "text": "        Sweets & snack food"
  },
  {
      "value": "13",
      "text": "    Furniture"
  },
  {
      "value": "389",
      "text": "        Bathroom/sauna"
  },
  {
      "value": "385",
      "text": "        Bedroom"
  },
  {
      "value": "390",
      "text": "        Children’s room"
  },
  {
      "value": "98",
      "text": "        Kitchen"
  },
  {
      "value": "101",
      "text": "        Living room"
  },
  {
      "value": "392",
      "text": "        Office"
  },
  {
      "value": "394",
      "text": "        Other (Furniture)"
  },
  {
      "value": "341",
      "text": "        Outdoor"
  },
  {
      "value": "99",
      "text": "        Project furniture"
  },
  {
      "value": "12",
      "text": "    Machinery"
  },
  {
      "value": "94",
      "text": "        Machinery components"
  },
  {
      "value": "91",
      "text": "        Machinery equipment/tools"
  },
  {
      "value": "224",
      "text": "        Manufacture of machinery"
  },
  {
      "value": "97",
      "text": "        Maritime"
  },
  {
      "value": "271",
      "text": "            Aluminium and steel workboats"
  },
  {
      "value": "269",
      "text": "            Boat/Yacht building"
  },
  {
      "value": "230",
      "text": "            Ship repair and conversion"
  },
  {
      "value": "93",
      "text": "        Metal structures"
  },
  {
      "value": "508",
      "text": "        Other"
  },
  {
      "value": "227",
      "text": "        Repair and maintenance service"
  },
  {
      "value": "11",
      "text": "    Metalworking"
  },
  {
      "value": "67",
      "text": "        Construction of metal structures"
  },
  {
      "value": "263",
      "text": "        Houses and buildings"
  },
  {
      "value": "267",
      "text": "        Metal products"
  },
  {
      "value": "542",
      "text": "        Metal works"
  },
  {
      "value": "75",
      "text": "            CNC-machining"
  },
  {
      "value": "62",
      "text": "            Forgings, Fasteners"
  },
  {
      "value": "69",
      "text": "            Gas, Plasma, Laser cutting"
  },
  {
      "value": "66",
      "text": "            MIG, TIG, Aluminum welding"
  },
  {
      "value": "9",
      "text": "    Plastic and Rubber"
  },
  {
      "value": "54",
      "text": "        Packaging"
  },
  {
      "value": "556",
      "text": "        Plastic goods"
  },
  {
      "value": "559",
      "text": "        Plastic processing technology"
  },
  {
      "value": "55",
      "text": "            Blowing"
  },
  {
      "value": "57",
      "text": "            Moulding"
  },
  {
      "value": "53",
      "text": "            Plastics welding and processing"
  },
  {
      "value": "560",
      "text": "        Plastic profiles"
  },
  {
      "value": "5",
      "text": "    Printing"
  },
  {
      "value": "148",
      "text": "        Advertising"
  },
  {
      "value": "150",
      "text": "        Book/Periodicals printing"
  },
  {
      "value": "145",
      "text": "        Labelling and packaging printing"
  },
  {
      "value": "7",
      "text": "    Textile and Clothing"
  },
  {
      "value": "44",
      "text": "        Clothing"
  },
  {
      "value": "45",
      "text": "        Textile"
  },
  {
      "value": "8",
      "text": "    Wood"
  },
  {
      "value": "337",
      "text": "        Other (Wood)"
  },
  {
      "value": "51",
      "text": "        Wooden building materials"
  },
  {
      "value": "47",
      "text": "        Wooden houses"
  },
  {
      "value": "3",
      "text": "Other"
  },
  {
      "value": "37",
      "text": "    Creative industries"
  },
  {
      "value": "29",
      "text": "    Energy technology"
  },
  {
      "value": "33",
      "text": "    Environment"
  },
  {
      "value": "2",
      "text": "Service"
  },
  {
      "value": "25",
      "text": "    Business services"
  },
  {
      "value": "35",
      "text": "    Engineering"
  },
  {
      "value": "28",
      "text": "    Information Technology and Telecommunications"
  },
  {
      "value": "581",
      "text": "        Data processing, Web portals, E-marketing"
  },
  {
      "value": "576",
      "text": "        Programming, Consultancy"
  },
  {
      "value": "121",
      "text": "        Software, Hardware"
  },
  {
      "value": "122",
      "text": "        Telecommunications"
  },
  {
      "value": "22",
      "text": "    Tourism"
  },
  {
      "value": "141",
      "text": "    Translation services"
  },
  {
      "value": "21",
      "text": "    Transport and Logistics"
  },
  {
      "value": "111",
      "text": "        Air"
  },
  {
      "value": "114",
      "text": "        Rail"
  },
  {
      "value": "112",
      "text": "        Road"
  },
  {
      "value": "113",
      "text": "        Water"
  }
])




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