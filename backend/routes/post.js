const express=require('express');
const requireLogin = require('../middlewares/requireLogin');
const routs=express.Router();
const Post=require('../models/postModel')
const moment=require('moment');


routs.post('/createPost',requireLogin,async(req,res)=>{
    const {image,body}=req.body;
    console.log(image)
    if(!image || !body){
        return res.status(400).json({message: 'please fill all fields',status:0})
    }
    try {
        req.body.postedBy=req.user;
        console.log(req.user)
        req.body.created_date=moment().format('LLL');
        const postData=await Post.create(req.body);
        if(postData){
            return res.status(200).json({message: 'Post Created Successfully',status:1,data:postData})
        }else{
            return res.status(400).json({message: 'Post Not Created',status:0})
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: 'Something Wrong !',status:0})
    }
})

routs.get('/allposts',requireLogin,async(req,res)=>{
    try{
        let postData=await Post.find().populate("postedBy","_id username")
        if(postData){
            return res.status(200).json({data:postData})
        }else{
            return res.status(400).json({message: 'Data not found !',status:0})
        }
    }catch(err){
        console.log(err);
        return res.status(400).json({message: 'Something Wrong !',status:0})
    }
})
module.exports=routs;