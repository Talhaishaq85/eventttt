import React,{ useEffect, useRef } from 'react';
import './gigg.css';
import newRequest from "../../utils/newRequest.js";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";
import MapContainer from '../../components/map/map';


const GigDetail = () => {
  const { id } = useParams();
  console.log(id);
 
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],


    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        console.log("Gig:",res.data);
        return res.data;
      }),
  });


  const userId = data?.userId;

  const {
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });
  
  console.log("Seller Data:",dataUser);

  

  


  const schedule = [
    { day: 'Monday', time: '10:00 A.M - 11:00 PM' },
    { day: 'Tuesday', time: '6:00 A.M - 11:00 PM' },
    { day: 'Wednesday', time: '7:00 A.M - 11:00 PM' },
    { day: 'Thursday', time: '10:00 A.M - 11:00 PM' },
    { day: 'Friday', time: '10:00 A.M - 11:00 PM' },
    { day: 'Saturday', time: '10:00 A.M - 11:00 PM' },
    { day: 'Sunday', time: '10:00 A.M - 11:00 PM' },
  ];

  
    const handleEmail = () => {
      window.location.href = `mailto:${seller.email}`;
    };
  
    const handlePhone = () => {
      window.location.href = `tel:${seller.phone}`;
    };


  return (
   <div>
    {isLoading ? (
      "loading"
    ) : error ? (
      "Something went wrong!"
    ) : (

   
    <div className="gig-detail ">
       
      <div className='gig-top section-border'>
        <div className='gig-top-left'>
            <div className='gig-top-left-left'>
                <img src={data.cover} alt="seller img"/>
            </div>
            <div className='gig-top-left-right'>
               <h1>{data.title}</h1>
                <h3>{data.cat}</h3>               
               <p></p>
               <p>DownTown London , Shop 230 , Near Wine Shop</p>
               <div className='gig-top-left-right-button'>
                <button>
                    Website
                </button>
                <button>
                    Call
                </button>
                <button>
                    Email
                </button>
                </div> 
            </div>

        </div>
        <div className='gig-top-right'>
        <div className='gig-top-right-content'></div>
        </div>

      </div>
      <div className='gig-down'>
        <div className='gig-down-left'>
            <div className='item1'>

                <h2>Review Summary</h2>
                <div className='item1-button'>
                <button>Read Reviews</button>
                <button>Write a Review</button>
                </div>
                
            </div>
            <div className='item2'>
                <h2>Opening Hours</h2>
                 {schedule.map((item, index) => (
        <span key={index}>
           {item.day} __   {item.time} ;
        </span>
      ))}
            </div>
            <div className='item3'>
               <h2>See anything wrong with this ?</h2>
               <p>Help us by letting us know.</p> 

                <button>
                    Suggest an Edit
                </button>
            </div>
            <div className='item4'>
               
            </div>
            <div className='item5'>
                <h2>Payment Methods</h2>
            </div>
           
            

        </div>
        <div className='gig-down-right'>
           <h2>Business Overview</h2>
           <p>{data.desc}</p>
            <h2>Photos</h2>
            <div className='gig-images section-border'>
            {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </div>

            <div className='gig-down-right-products section-border1'>
                <h2>Products & Services</h2>
                <div className='gig-down-right-products-content'>
                <button>Catering</button>
                <button>Food</button>
                <button>Birthday</button>
                <button>Venues</button>
                <button>Marraige</button>
                </div>
            </div> 
            <div className='gig-down-right-reviews section-border1'>
                
                <Reviews gigId={id} />

            </div>
            
        </div>

      </div>
    </div>
)}
</div>
  );
};

export default GigDetail;
