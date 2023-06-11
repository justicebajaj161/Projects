import React, { useEffect, useState } from 'react';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { showbookingsApi } from '../Apis/api';

const Bookings = () => {

  const [bookingsShow, setBookingsShow] = useState('');


  const showingBookings=async()=>{
     const response=await showbookingsApi();
     setBookingsShow(response.data.bookingsOfUserid)
  }
  
  useEffect(()=>{
    showingBookings()
  },[])


  console.log(bookingsShow)
  return (
    <div>
     <h4 className='booking-title'>{`Booking`}
        </h4>
        <div className='heading-info'>
        <div className='row'>
        <div className='col-3 heading'><center>To:</center></div>
        <div className='col-3 heading'>From:</div>
        <div className='col-2 heading'>Airlines:</div>
        <div className='col-2 heading'>Price:</div>
        <div className='col-2 heading'>date:</div>
        </div>
         
        </div>
      <div className='booking-container'>
        {bookingsShow && bookingsShow.map((books)=>{
          return <>
          <div className='row'>
        <div className='col-3 booking-table'><center>{books.to}</center></div>
        <div className='col-3 booking-table'>{books.from}</div>
        <div className='col-2 booking-table'>{books.airline}</div>
        <div className='col-2 booking-table'>{books.prices}</div>
        <div className='col-2 booking-table'>{moment(books.date).format("MMM Do YY")}</div>
        </div>
        <hr/>
          </>
        })}
        
      </div>
     
      
    </div>
  )
}

export default Bookings
