import express from "express";
import { createBlog, deleteBlogById, getBlogs, getBlogsById, updateBlogById } from "../controller/controller.js";



const Router= express.Router();



Router.post('/createblog',createBlog)
Router.get('/getAllBlogs',getBlogs)
Router.get('/getBlogsById/:id',getBlogsById)
Router.post('/deleteblog/:id',deleteBlogById)
Router.post('/updateblog/:id',updateBlogById)
// Router.get('/verifyToken/:token',confirmToken)




export default Router;