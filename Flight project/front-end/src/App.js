import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './Component/Navbar';
import Login from './Login-Reg/Login';
import Register from './Login-Reg/Register';
import Flights from './Component/Flights';
import ProtectedRoutes from './Login-Reg/ProtectRoutes';
import Bookings from './Component/Bookings';



function App() {
  return (
    <>
   <BrowserRouter>
   
        
        <ToastContainer/>
          {/* <Sidebar /> */}
          <Routes>

        
           
            <Route path="/" element={<Navbar />}>
              <Route index element={<ProtectedRoutes><Flights/></ProtectedRoutes>} />
              <Route path="/bookings" element={<ProtectedRoutes><Bookings/></ProtectedRoutes>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
           
             
           
            </Route>
         
            
          </Routes>
        
      </BrowserRouter>
   
    </>
  );
}

export default App;
