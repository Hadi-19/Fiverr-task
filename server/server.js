const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

// Add your routes and middleware here

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));