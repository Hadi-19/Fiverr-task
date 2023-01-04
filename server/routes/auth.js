const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const validator=require('validator')
const verifyJWT=require("../middlewares/verifyJWT")


// Use the middleware on the routes that require authentication
router.get("/", verifyJWT, (req, res) => {
  console.log('welcome')
  res.send("Welcome to the protected route!");
});

router.post("/signup", async (req, res) => {
  
    try{
      if (!email || !password) {
        throw Error('All fields must be filled')
      }
      if (!validator.isEmail(email)) {
        throw Error('Email not valid')
      }
      if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
      }
  // Check if email already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists)
    return res.status(400).send("Email already exists");

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  
    const savedUser = await user.save();
   /* res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }*/
  // Create and assign JWT
  const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET,{ expiresIn: '3d' });
  res.header("auth-token", token).send({token,name:savedUser.name});
    }catch (error) {
        res.status(400).send(error);
      }
});

router.post("/login", async (req, res) => {
  const{email,password}=req.body
    try{
      if (!email || !password) {
        throw Error('All fields must be filled')
      }
  // Check if email exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Email is incorrect");

  // Check if password is correct
  
  const validPassword = await bcrypt.compare(password, user.password);
  
  if (!validPassword)    return res.status(400).send(" password is incorrect");

  // Create and assign JWT
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res.header("auth-token", token).send({token,name:user.name});
    }catch (error) {
      console.log(error)
        res.status(500).send(error);
      }
});

module.exports = router;
