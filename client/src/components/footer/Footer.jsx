import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <Link className="link menuLink" to="/gigs?search=Music">
            <span>Music</span>
            </Link>
            <Link className="link menuLink" to="/gigs?search=Food">
            <span>Food</span>
            </Link>
            <Link className="link menuLink" to="/gigs?search=Catering">
            <span>Catering</span>
            </Link>
            <Link className="link menuLink" to="/gigs?search=Photography">
            <span>Photography</span>
            </Link>
            <Link className="link menuLink" to="/gigs?search=Venues">
            <span>Venues</span>
            </Link>
            <Link className="link menuLink" to="/gigs?search=Transport">
            <span>Transport</span>
            </Link>
            <Link className="link menuLink" to="/gigs?search=Staff">
            <span>Staff</span>
            </Link>
            <Link className="link menuLink" to="/gigs?search=Entertainment">
            <span>Entertainment</span>
            </Link>
            <Link className="link menuLink" to="/gigs?search=Others">
            <span>Others</span>
            </Link>
          </div>
          <div className="item">
            <h2>About</h2>
            <Link className="link menuLink" to="/customerterms">
            <span>Terms and Conditions(Customer)</span>
            </Link>
            <Link className="link menuLink" to="/supplierterms">
            <span>Terms and Conditions(Supplier)</span>
            </Link>
            <Link className="link menuLink" to="/customerprivacy">
            <span>Customer Privacy Policy</span>
            </Link>
            <Link className="link menuLink" to="/supplierprivacy">
            <span>Supplier Privacy Policy</span>
            </Link>
            <span>Terms of Service</span>
            <Link className="link menuLink" to="/customerrelations">
            <span>Customer Relations</span>
            </Link>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Event Directory</span>
            <span>Buying on Event Directory</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Success Stories</span>
            <span>Charitable donations</span>
            <span>Calender</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More Event Directory</h2>
            <span>Event Business</span>
            <span>Event Bronze</span>
            <span>Event Silver</span>
            <span>Event Gold</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Event Directory</h2>
            <span>© Event Directory Ltd. 2023</span>
            <span>ITD Number : 14668051</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
