import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteBlogAxios, getAllBlogsAxios } from '../apis/Api';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateBlog from './Update';

const Home = () => {
    
    const [allBlogs,setGetAllBlogs] = useState('');


    const navigate = useNavigate()
    

    const createButton=async()=>{
        navigate(`/createblog`)
    }


    useEffect(()=>{
        getAllBlogs();
      },[])

      const getAllBlogs=async()=>{
        // setLoading(true);
          const {data}=await getAllBlogsAxios();
        //   setLoading(false);
          setGetAllBlogs(data.blogDatas)
          }
    
    const showBlog=async(e)=>{
        navigate(`/blog/${e}`)
    }

    const deleteBlog=async(e)=>{
        let confirm = window.confirm('Do you really want to delete this post?');
        if(!confirm){
         return;
       }
        const response=await deleteBlogAxios(e);
        toast.error(response.data.message)
        getAllBlogs()
    }

    const updateBlog=async(e)=>{
        navigate(`/updateblog/${e}`)
    }

    return (
        <div className='App'>
            <div className='your-blogs'><h1>Blogs</h1></div>
            <div className='create-button' onClick={createButton}><button>Create <i class="fa-solid fa-plus"></i></button></div>

            <div className='blogs-container'>
                {allBlogs && allBlogs.map((blog)=>{
                 return       <div className='blogs-row'>
                 <div className='blog-name' onClick={(e)=>showBlog(blog._id)}>{blog.blogTitle}</div>
             
             <div className='update-button' onClick={(e)=>updateBlog(blog._id)}>
                 Update
             </div>
             <div className='delete-button' onClick={(e)=>deleteBlog(blog._id)}>
                 Delete
             </div>

             </div>
                })}
          


            </div>
        </div>
    )
}

export default Home
