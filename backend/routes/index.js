const express=require('express')
const routs=express.Router()

routs.use('/',require('./auth'))
routs.use('/post',require('./post'))

module.exports=routs;