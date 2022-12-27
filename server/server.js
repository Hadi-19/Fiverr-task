const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

// Add your routes and middleware here
app.post('/register', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // Store the email and hashed password in your database
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  });
  
  app.post('/login', async (req, res) => {
    try {
      // Look up the user in the database
      const user = await User.findOne({ email: req.body.email });
      if (!user) return res.status(400).send('Email or password is incorrect');
  
      // Compare the hashed passwords
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) return res.status(400).send('Email or password is incorrect');
  
      // Create a JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 3600,
      });
      res.send({ token });
    } catch (error) {
      res.sendStatus(500);
    }
  });
  

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));