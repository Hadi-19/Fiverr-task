const express = require("express");
const router = express.Router();

const Sectors = require("../models/Sectors");
const validator=require('validator')

const verifyJWT=require("../middlewares/verifyJWT")
router.use(verifyJWT);
router.get('/',async(req,res)=>{
    try{
        const sectors=await Sectors.find()
        res.status(200).send(sectors)
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
    

})

module.exports=router;
