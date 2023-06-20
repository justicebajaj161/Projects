import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { getBlogsByIdAxios } from '../apis/Api';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [content, setContent] = useState('');


    const navigate = useNavigate()
    const {id} =useParams()

    useEffect(()=>{
      getBlogsById()
      
    },[])


    const getBlogsById=async()=>{
      
      const {data}=await getBlogsByIdAxios(id);
      setTitle(data.blogDatas[0].blogTitle)
      setDescription(data.blogDatas[0].blogDesc)
      setPhoto(data.blogDatas[0].blogMedia)
      setContent(data.blogDatas[0].blogContent)
      
      }


  // Dummy data for demonstration purposes
  const blog = {
    title: title,
    description: description,
    photo: photo,
   content:content
  };

  return (
    <div className="App">
      <h1>{blog.title}</h1>
      {blog.photo?
      <div className='blog-photo-container'>
      <img src={blog.photo} alt="Blog" className='blog-photo' />
      </div>
      :""}
      
    
      <p  className='desc'>{blog.description}</p>
      <div>{blog.content}</div>
    </div>
  );
};

export default Blog;
