const express = require("express");
const router = express.Router();

const Sectors = require("../models/Sectors");
const User = require("../models/User");
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

router.get('/user',async(req,res)=>{
    const user=await User.findById(req.user._id).select("name sectors")
    console.log(user)
    res.send(user)
})

module.exports=router;
