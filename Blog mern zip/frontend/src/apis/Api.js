import axios from 'axios'


const URL=`http://localhost:8000`;

const createBlogAxios=async(blogdata)=>{
    
    try {
     console.log(blogdata)
     return await axios.post(`${URL}/api/createBlog`,blogdata)
    } catch (error) {
     console.log(error)
    }
    
}

const getAllBlogsAxios=async()=>{
    
    try {
     
     return await axios.get(`${URL}/api/getAllBlogs`)
    } catch (error) {
     console.log(error)
    }
    
}

const getBlogsByIdAxios=async(id)=>{
    
    try {
      
      return await axios.get(`${URL}/api/getBlogsById/${id}`)
    } catch (error) {
      console.log('problem in api get',error)
    }
  }

  const deleteBlogAxios=async(id)=>{
    
    try {
      
      return await axios.post(`${URL}/api/deleteblog/${id}`)
    } catch (error) {
      console.log('problem in api get',error)
    }
  }

  const updateBlogAxios=async(id,updateData)=>{
    try {
      
        return await axios.post(`${URL}/api/updateblog/${id}`,updateData)
      } catch (error) {
        console.log('problem in api get',error)
      }
  }





export {createBlogAxios,getAllBlogsAxios,getBlogsByIdAxios,deleteBlogAxios,updateBlogAxios}