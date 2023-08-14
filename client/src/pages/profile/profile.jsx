import React from 'react'
import "./profile.css";
import Countdown from '../../components/CountDown/CountDown.jsx';
import Reviews from '../../components/reviews/Reviews';
import StaticDateTimePickerLandscape from '../../components/CountDown/Calender';

const Profile = () => {
  return (
    <div className='profile'>
    <div className='seller_name'>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"/>
         <h1>Talha Ishaq (King Catering ) </h1> 
         <button>
            Edit
         </button>
        </div>    
    <div className='seller_pf'>
        <div className='seller_social'>
            <h2>My Social Media</h2>
           <div className='linkdin'>
            <img src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png"/>
           <p>Linkdin</p>
            </div> 

            <div className='Instagram'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1nMOxdx7WKCwhOXnfc5PK6Jt8Nasq8w0vhix6liIfRiq4BVnZ&s"/>
           <p>Instagram</p>
            </div> 
            
            <div className='Facebook'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU2etThATbfHEvFTsIqewYF9zHsFYJt_58Rq6ljXDtPVso9s5_&s"/>
           <p>Facebook</p>
            </div> 
            
            
            <div className='Google'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eRoYwDFcseRIb4btQJlWhsFM5rq9SUD4SFgIqqKQAMS1YQA&s"/>
           <p>Google</p>
            </div> 

            
            <div className='TikTok'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpZW5g9KrH3D7dOf9z3nEPdaZmzHNLELjVu454HaLEy0kQoE&s"/>
           <p>TikTok</p>
            </div> 


        </div>
        <div className='seller_reviews'>
            

            <h2>CheckOut the Recent Reviews</h2>

            <button>
                Explore
            </button>

        </div>
        <div className='seller_CountDown'>
            <h1>CountDown to my Next Event</h1>

            <Countdown />
        </div>
        <div className='seller_todo'>
            <h2>To Do</h2>
            <p>--Clients Deliveries</p>
            <p>--Empolyee salary dues</p>

        </div>
        <div className='My_Profile'>
            <h2>Add your Business Profile Here</h2>

        </div>
        <div className='Calender'>
            <h2>Calender</h2>

            <StaticDateTimePickerLandscape />

        </div>
        <div className='Tools'>
            <h2>Tools</h2>

            <h4>Millage Calculator</h4>
            <h4>Tax Calculator</h4>
            <h4>VAt Returns</h4>
            <h4>Budget WorkSheets</h4>
            <h4>Event Cost Calculator</h4>

        </div>
        <div className='Business_help'>
            <h2>Business Help</h2>

            <p>Marketing Help</p>
            <p>Blogs</p>
            <p>Business Support</p>
            <p>USeful Links</p>
            <p>Website Setup</p>
            <p>The Knowledge</p>

        </div>
        <div className='email_messages'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_EqJGlsZm107HDwXtiIqUzLMg_cYrqVfeQ&usqp=CAU'/>
            <h4>Sync with other email  

Messages from <br></br> clients 

Linked into templates  </h4>
        </div>


        </div>
        <div className='qu'>
            <h2>Quote Templates</h2>
        </div>
        <div className='seller_quotes'>

            <button>
                Wedding
            </button>
            <button>
                Funeral
            </button>
            <button>
                Birthday
            </button>
            <button>
                Christing
            </button>
            <button>
                Other
            </button>
        </div>
    </div>
  )
}

export default Profile



