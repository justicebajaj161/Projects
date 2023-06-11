import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../Apis/api';


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const navigate = useNavigate()

    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    }
  
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    }
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    }
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      const mailFormat=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      console.log(`Submitting: ${firstName} ${lastName} ${email} ${password}`);

      if (firstName && lastName && email && password){
        if (!mailFormat.test(email)) {
           toast.error('Wrong Email Format')
        } else {
          console.log('Submiiting')
            const response= await registerUser({firstName,lastName,email,password});
            console.log(response)
            if(response?.status===200){
             
            toast.success(response.data.message)
               navigate('/login')
               
             }
           if(response?.status===401 || response?.status === 404){
             toast.success(response.data.message)
               navigate('/register')
             }
        }
     
     
    }else{
       
        toast.error('Invalid Inputs Please Fill All Fields')
    }
    
}

    
  return (
    <div>
      <div className='content-in-center'>
        <h2>Register</h2>
        <div className='register-container '>
        <form className='formbox' onSubmit={handleSubmit} >
            <br/>
      <div>
        
        <label htmlFor="firstName">First Name:</label>
        <br/>
        <input className='log-reg-input' type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        
      </div>
      <br/>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <br/>
        <input className='log-reg-input' type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
        
      </div>
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
      <button className='log-reg-input log-reg-btn' type="submit">Register</button>
     
    </form>
        </div>
      </div>
    </div>
  )
}

export default Register
