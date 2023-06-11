import axios from 'axios'

const URL = `http://localhost:7000`



const authorizationHeaders=()=>{
    const user = JSON.parse(localStorage.getItem('auth'))
    const token = user?.user;
  
    const finalHeader = {
        headers: { Authorization: `Bearer ${token}` }
    }
  
    return finalHeader;
  }

const registerUser=async(data)=>{
    try {
      console.log("here is data",data)
        return await axios.post(`${URL}/api/auth/register`,data)
        
        
      } catch (error) {
         console.log('error while calling the user api',error)
      }
}
const loginUser=async(data)=>{
    try {
        return await axios.post(`${URL}/api/auth/login`,data)
        
        
      } catch (error) {
         console.log('error while calling the user api',error)
      }
}

const getCitiesDetails=async()=>{
    try {
        return await axios.get(`${URL}/api/auth/getcitiesdata`)
    } catch (error) {
        console.log('error while calling the user api',error)
    }
}

const sendingCitiesApi=async(data)=>{
    const finalHeader=authorizationHeaders();
    try {
        console.log(data)
        return await axios.post(`${URL}/api/auth/sendcitiesfordates`,data,finalHeader)
    } catch (error) {
        console.log('error while calling the user api',error)
    }
}

const submitForBooking=async(data)=>{
    const finalHeader=authorizationHeaders();
    try {
        console.log(data)
        return await axios.post(`${URL}/api/auth/postbooking`,data,finalHeader)
    } catch (error) {
        console.log('error while calling the user api',error)
    }
}

const showbookingsApi=async()=>{
    const finalHeader=authorizationHeaders();
    try {
        
        return await axios.get(`${URL}/api/auth/showbooking`,finalHeader)
    } catch (error) {
        console.log('error while calling the user api',error)
    }
}


export {registerUser,loginUser,getCitiesDetails,sendingCitiesApi,submitForBooking,showbookingsApi}