const express = require('express'),
Blog= require('../models/blogModel'),
router = express.Router();


//videoda home çift tırnak
router.get("/addNewBlog", (req, res)=>{
    res.render("blog/newBlog" );
 });

 router.post("/addNewBlog", (req, res)=>{
   let title = req.body.data.blogTitle;
   let comImage = req.body.data.comImage;
   let comSentence = req.body.data.comSentence;
   let blog = req.body.data.blog;

   let newBlog= { title:title, comImage:comImage, comSentence:comSentence,blog:blog };

   Blog.create(newBlog)
   .then(function(newBlog){
    console.log(newBlog);
    res.status(201).json(newBlog);
   })

   .catch(function(err){
    console.log("===============ERROR ERROR ERROR =============");
    console.log(err);
    res.send(err);
   })
   
 });

router.get("/blogs/:blogId", (req,res)=>{
    Blog.findById(req.params.blogId)
    .then((foundBlog)=>{
        res.render("blog/showBlog", {foundBlog:foundBlog});
    });
});

 //Test Router 

 router.get("/testing", (req,res)=>
 {
Blog.find()
.then((foundBlogs)=>
{
res.json(foundBlogs);
})
.catch((err)=>{
    console.log(err);
    res.send(err);
})
 });

module.exports = router;