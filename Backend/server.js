const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeurls = require('./routes/route')
const cors = require('cors')

// 
dotenv.config()

// connecting to database using mongoose
mongoose.connect(process.env.DB_ACCESS_LINK, () => 
    console.log('Connected to Database'))

// express.json() is a body-parser

app.use(express.json())
app.use(cors())
app.use('/app', routeurls)
app.listen(process.env.PORT, () => 
    console.log(`Server is running on port: ${process.env.PORT}`))