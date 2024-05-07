const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv').config();
const data = require('./data');
const cors = require('cors');
app.use(cors());
const User=require('./models/userModel')


const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((res)=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB',err);
    process.exit(1)
})
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/',require('./routes/index'))


app.listen(port, (err) => {
    (err)?console.log(err):console.log('server is running on port',port)
});
