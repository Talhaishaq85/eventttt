import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log("currentUser",currentUser);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser",null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Event Directory</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
        <Link className="link" to="/seller/profile">
            <span className="text">Event Handling Business</span>
          </Link>
          
          <span>Explore</span>
          <Link className="link" to="/newgig">
            <span className="text">English</span>
          </Link>

          {!currentUser?.isSeller && 
          
          
          <Link className="link" to="/pay">
                        Become a Seller
                      </Link>
          
          }

          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Services
                      </Link>
                      <Link className="link" to="/add">
                        Add New Service
                      </Link>
                      <Link className="link" to="/selleranalytics">
                        Profile Analytics
                      </Link>
                    </>
                  )}
                  {currentUser.__v == 1 && (
                    <>
                      
                      <Link className="link" to="/admindash">
                        Admin Dashboard
                      </Link>
                    </>
                  )}
                                   
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link"><button>Sign in</button></Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {/* {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to={`/gigs?search=Music`}>
              Music
            </Link>
            <Link className="link menuLink" to="/gigs?search=Food">
              Food
            </Link>
            <Link className="link menuLink" to="/gigs?search=Catering">
              Catering
            </Link>
            <Link className="link menuLink" to="/gigs?search=Photography">
              Photography
            </Link>
            <Link className="link menuLink" to="/gigs?search=Venues">
              Venues
            </Link>
            <Link className="link menuLink" to="/gigs?search=Transport">
              Transport
            </Link>
            <Link className="link menuLink" to="/gigs?search=Staff">
              Staff
            </Link>
            <Link className="link menuLink" to="/gigs?search=Entertainment">
             Entertainment
            </Link>
            <Link className="link menuLink" to="/gigs?search=Others">
             Others
            </Link>
          </div>
          <hr />
        </>
      )} */}
    </div>
  );
}

export default Navbar;
