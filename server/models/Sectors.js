const mongoose = require("mongoose");
require('dotenv').config()
const sectorSchema = new mongoose.Schema({
    
          name: String,
          subsectors: [
            {
              name: String,
              subsectors:[{name:String}]
            },
            
          ]
        ,
        
      
});


const Sector = mongoose.model("Sector", sectorSchema);
module.exports=Sector;

/*let temp={
    _id: ObjectId(),
    name: String,
    sectors: [
      {
        name: String,
        subsectors: [
          {
            name: String
          },
          ...
        ]
      },
      ...
    ]
  }
  */


 /* db.collection("people").insertOne({
    _id: ObjectId(),
    name: "John Smith",
    sectors: [
      {
        name: "Manufacturing",
        subsectors: [
          { name: "Construction materials" },
          { name: "Electronics and Optics" },
          {
            name: "Food and Beverage",
            subsectors: [
              { name: "Bakery & confectionery products" },
              { name: "Beverages*/
  