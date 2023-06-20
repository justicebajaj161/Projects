import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import Blog from '../model/blog-schema.js';


const createBlog=async(req,res)=>{
    const content=JSON.parse(req.body.content);
    const title=JSON.parse(req.body.title);
    const description=JSON.parse(req.body.description);
    const files=req.files

    
    if(!files){
        const blog = await new Blog({blogTitle:title,blogDesc:description,blogContent:content}).save();
         return res.json({message:"Blog Posted"})
     }
     const filePath = files.photo.tempFilePath
        const result = await cloudinary.uploader.upload(filePath, {
           use_filename: true,
           folder: 'blogphotos'
       });
       // delete temp to remove from your own server
       fs.unlinkSync(filePath);
        
         const blog = await new Blog({blogTitle:title,blogDesc:description,blogContent:content,blogMedia:result.secure_url,blogMediaPublicId:result.public_id}).save();
         res.json({message:"Blog Posted"})
    // console.log(blog)
    
}


const getBlogs=async(req,res)=>{
    
        const blogDatas=await Blog.find({}).sort({createdAt:'desc'})
        
        res.json({message:"blog Data",blogDatas})
    
}


const getBlogsById=async(req,res)=>{
      
    const id=req.params.id
    
    const blogDatas=await Blog.find({_id:id})
    console.log(blogDatas)
    res.json({message:"blog Data",blogDatas})
}

const deleteBlogById=async(req,res)=>{
    const id=req.params.id


    
    console.log(id)
    const blogData=await Blog.findOne({_id:id});
    if(blogData.blogMediaPublicId){
       const deleteBlogMediaFromCloud = await cloudinary.uploader.destroy(blogData.blogMediaPublicId);
       const blogDelete=await Blog.deleteOne({_id:id})
    res.json({message:"Blog Deleted"})
    }else{
    const blogDelete=await Blog.deleteOne({_id:id})
    return res.json({message:"Blog Deleted"})}
    // res.json({message:'Blog Deleted'})
}


const updateBlogById=async(req,res)=>{
    const id=req.params.id
    const content=JSON.parse(req.body.content);
    const title=JSON.parse(req.body.title);
    const description=JSON.parse(req.body.description);
    const files=req.files

    const previousBlog=await Blog.findById({_id:id})
    if(!files){
        const blog = await Blog.updateOne({_id:id},{$set:{blogTitle:title,blogDesc:description,blogContent:content}});
         return res.json({message:"Blog Updated"})
     }
    if(!previousBlog.blogMediaPublicId){
        const filePath = files.photo.tempFilePath
        const result = await cloudinary.uploader.upload(filePath, {
           use_filename: true,
           folder: 'blogphotos'
       });
       const blog = await Blog.updateOne({_id:id},{$set:{blogTitle:title,blogDesc:description,blogContent:content,blogMedia:result.secure_url,blogMediaPublicId:result.public_id}});
    
    return res.json({message:"Blog Updated"})
    }
     const deletePreviousPic = await cloudinary.uploader.destroy(previousBlog.blogMediaPublicId);
     const filePath = files.photo.tempFilePath
        const result = await cloudinary.uploader.upload(filePath, {
           use_filename: true,
           folder: 'blogphotos'
       });
       fs.unlinkSync(filePath);
       const blog = await Blog.updateOne({_id:id},{$set:{blogTitle:title,blogDesc:description,blogContent:content,blogMedia:result.secure_url,blogMediaPublicId:result.public_id}});
    
    return res.json({message:"Blog Updated"})
}



export {createBlog,getBlogs,getBlogsById,deleteBlogById,updateBlogById}