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
    const user=await User.findById(req.user._id).select("name sectors hasAgree")
    console.log(user)
    res.send(user)
})
router.post('/user',async(req,res)=>{
    try{
    const{name,sectors,hasAgree}=req.body
    // let sec=[]
    // for(sect of sectors ){
    //     let se=await Sectors.find({value:sect}).select('_id')
    //     sec.push
    // }
    const promises=sectors.map(async(sector)=>{
        const id=await Sectors.find({value:sector}).select('_id text')
        return id[0]
    })
    const ids=await Promise.all(promises);
    console.log(ids)
   let user=await User.findById(req.user._id)
   user.name=name
   user.sectors=ids
   user.hasAgree=hasAgree
   await user.save()
   res.send('updated')
}
catch(e){
    res.status(501).send(e)
}

})

module.exports=router;
