import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../Apis/api';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }
    
      const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(`Submitting:  ${email} ${password}`);
        if ( email && password){
          const response=await loginUser({email,password});
           const {data} = await loginUser({email,password});
     // .then(res=>alert(res.data.message));
     console.log(data)
      if (data?.user && data.logined===true) {
         if(response?.status===200){
            
             localStorage.setItem('auth',JSON.stringify(data));
             toast.success(data.message)
             navigate('/')
               }
              if(response?.status===401 || response?.status === 404){
               toast.error('error 401 or 404')
                 navigate('/login')
               }
           
            
            
      } else {
         toast.error(data.message)
      }
 
       
         
     }else{
         toast.error('Invalid Inputs Please Fill All Fields')
     }
      }
  return (
    <div>
       <div>
      <div className='content-in-center'>
        <h2>Login</h2>
        <div className='register-container '>
        <form className='formbox' onSubmit={handleSubmit} >
            <br/>
     
    
      <div>
        <label htmlFor="email">Email:</label>
        <br/>
        <input className='log-reg-input' type="email" id="email" value={email} onChange={handleEmailChange} />
        
      </div>
      <br/>
      <div>
        <label htmlFor="password">Password:</label>
        <br/>
        <input className='log-reg-input' type="password" id="password" value={password} onChange={handlePasswordChange} />
        <br/>
      </div>
      
      <br/>
      <button className='log-reg-input log-reg-btn' type="submit">Login</button>
     
    </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
