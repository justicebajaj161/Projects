import React, { useEffect, useState } from 'react';
import { getCitiesDetails, sendingCitiesApi, submitForBooking } from '../Apis/api';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const Flights = () => {
  const [inputToValue, setInputToValue] = useState('');
  const [inputFromValue, setInputFromValue] = useState('');
  const [flightDetailsDates,setFlightDetailsDates]=useState('')
  const [flightDetailsPrices,setFlightDetailsPrices]=useState('')
  const [cities, setCities ]= useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showdates, setShowDates] = useState(false);
  const [showPrices, setShowPrices] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);


  const navigate = useNavigate();

  const handleHover = () => {
    setIsHovered(true);
  };

  const sendCitiesToBackend = async () => {
    if (inputToValue && inputFromValue) {
      const response = await sendingCitiesApi({ inputToValue, inputFromValue });
      if (response.data.message === 'Available Dates') {
        toast.success(response.data.message);
        setShowDates(true);
        setFlightDetailsDates(response.data.possibleflights.dates);
        setFlightDetailsPrices(response.data.possibleflights.prices.map(price => {
          const { _id, ...rest } = price;
          console.log(rest)
          return rest;
        }));


      } else {
        toast.warning(response.data.message);
        setShowDates(false);
        setFlightDetailsDates([]);
      }
    } else {
      toast.error('Invalid Inputs. Please Fill All Fields');
    }
  };
  

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleInputToChange = (event) => {
    setInputToValue(event.target.value);
  };
  const handleInputFromChange = (event) => {
    setInputFromValue(event.target.value);
  };


const getallcitiesdata=async()=>{
  const response=await getCitiesDetails();
  setCities(response.data.citiesData)
  // setFlightInformation(response.data)
}

const submitDate=async(date)=>{
  console.log(date)
  setSelectedDate(date)
  setShowPrices(true)
}

const submitPrice=async(airline,price)=>{
  
  const response=await submitForBooking({airline,price,inputToValue,inputFromValue,selectedDate});

  navigate('/bookings')
  toast.success(response.data.message);
}

useEffect(()=>{
  getallcitiesdata();
},[])



  return (
    <div>
      <div className='destination-container'>
        <div className='destination-form'>
          <div className='destination-input to'>
            <label>To:</label>
            <br />
            <input
              type='text'
              value={inputToValue}
              onChange={handleInputToChange}
              list='toOptions'
            />
            <datalist id='toOptions'>
              {cities && cities.map((city) => {
                return <option value={city.cities} />
              })}
              
              </datalist>
          </div>
          <div className='destination-input from'>
            <label>From:</label>
            <br />
            <input
              type='text'
              value={inputFromValue}
              onChange={handleInputFromChange}
              list='fromOptions'
            />
          <datalist id='fromOptions'>
              {cities && cities.map((city) => (
                <option value={city.cities} />
              ))}
            </datalist>
          </div>
        </div>


        <div className='button-container'>
          <button className='check-date' onClick={sendCitiesToBackend}>Date Availability</button>
        </div>

      </div>
      <div className='date-price-container'>
      {showdates ?
      
      <div className='date-container'>
        <h4 className='date-title'>Departure Dates :</h4>
       {flightDetailsDates && flightDetailsDates.map((flightDates)=>{
         const isSelected = flightDates === selectedDate;
         return  <h6 className={`dates ${isSelected ? 'selected' : ''}`} onMouseEnter={handleHover}
     onMouseLeave={handleMouseLeave} onClick={(e)=>submitDate(flightDates)}
   >
     {moment(flightDates).format("MMM Do YY")}
     </h6>
       })}
       
        
        
      </div>  : ''}

      {showPrices ?  <div className='price-container'>
      <h5 className='price-title'>Airlines:</h5>
      {flightDetailsPrices &&
  Object.entries(flightDetailsPrices[0]).map(([airline, price], index) => (
    <h6 key={index} className='prices' onClick={(e)=>submitPrice(airline,price)}>{`${airline}: ${price}`}</h6>
  ))
}


     
     </div>:''}
    


      </div> 
     
    </div>
  );
};

export default Flights;
