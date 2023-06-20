import React, { useContext, useEffect, useState } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBlogAxios, getBlogsByIdAxios, updateBlogAxios } from '../apis/Api';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadingContext } from './LoadingContext';

const UpdateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [content, setContent] = useState('');
  const {loading,setLoading}=useContext(LoadingContext)

  const navigate = useNavigate()


  const {id} =useParams()

  const getBlogsById=async()=>{
    const {data}=await getBlogsByIdAxios(id)
    setTitle(data.blogDatas[0].blogTitle)
    setDescription(data.blogDatas[0].blogDesc)
    setPhoto(data.blogDatas[0].blogMedia)
    setContent(data.blogDatas[0].blogContent)
  }

  useEffect(()=>{
   getBlogsById()
  },[])

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Perform submission logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Photo:', photo);
    console.log('Content:', content);
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('title',JSON.stringify(title));
    formData.append('description', JSON.stringify(description));
    formData.append('content', JSON.stringify(content));
    if (content&&title&&description) {
        setLoading(true);
        const response=await updateBlogAxios(id,formData);
        setLoading(false);
        navigate('/')
        toast.success(response.data.message)
      } else {
        toast.error('Please Provide Some Input')
      }
  };

  return (
    <div className="create-blog-container">
      <h1>Update Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">Photo:</label>
          <input type="file" id="photo" onChange={handlePhotoChange} />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
