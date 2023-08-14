import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./selleranalytics.css";
import newRequest from '../../utils/newRequest.js';


const SellerAnalytics = (props) => {
  
    const sellerId = props.match.params.id;
    const [rating, setRating] = useState(null);
  
    useEffect(() => {
      

      newRequest.get(`/api/rating/${sellerId}`)
        .then(response => setRating(response.data.rating))
        .catch(error => console.error(error));


    }, [sellerId]);
  
    if (rating === null) {
      return <p>Loading...</p>;
    }
  




  return (
    <div>
      <p>Trustpilot Rating:</p>
      <p>{rating}/10</p>
    </div>
  );


  }

      
  
  

export default SellerAnalytics;
