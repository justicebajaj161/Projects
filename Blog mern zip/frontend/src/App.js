
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Createblog from './components/Createblog';
import Home from './components/Home';
import Blog from "./components/Blog";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateBlog from "./components/Update";
import  { LoadingContext, LoadingProvider} from './components/LoadingContext';
import { BallTriangle } from "react-loader-spinner";
import { useContext } from "react";

function App() {
  const {loading, setLoading} = useContext(LoadingContext);
  return (
   <>
   

   
      <BrowserRouter>
        
      {loading ? (
              <div className="loading-overlay">
                <BallTriangle
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              </div>
            ) : (
              <ToastContainer />
            )}
      
       
          <Routes>

            
            
            
           
              <Route index element={<Home />} />
              <Route path="/createblog" element={<Createblog />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/updateblog/:id" element={<UpdateBlog/>}/>
              
            
         

          </Routes>
        
      </BrowserRouter>
      
     
   </>
  );
}

export default App;
