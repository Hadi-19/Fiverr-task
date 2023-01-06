const mongoose = require("mongoose");
require('dotenv').config()
const sectorSchema = new mongoose.Schema({
    
        /*  name: String,
          subsectors: [
            {
              name: String,
              subsectors:[{name:String}]
            },
            
          ]
        ,*/
        value:{type:String},
        text:{type:String}
        //,space:{type:String}
        
      
});


const Sectors = mongoose.model("Sector", sectorSchema);
module.exports=Sectors;

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

