import React from 'react';
import Horse1 from "../assets/david-dibert-Huza8QOO3tc-unsplash.jpg";
import Horse2 from "../assets/helena-lopes-lIeqGEdvex0-unsplash.jpg";
import Horse3 from  "../assets/guillermo-mota-ax2WNRH_bec-unsplash1.jpg";
import Horse4 from "../assets/selcuk-ulutas-CbnogotK6P8-unsplash.jpg";
import Horse from "../assets/horse-6351668_1280.jpg"
import { Link } from 'react-router-dom';
import "../Styles/landing.css";

const LandingPage = () => {
  return (
    <>
    <div className='landiv'>
      <img  src={Horse}  />
    </div>
    <div className="landing-page">
      <h1>Welcome to Horse Ride Booking</h1>
      <div className="horse-list">
        <div className="horse-card">
          <img src={Horse1} alt=" Silver Blaze Horse" />
          <p className='horsename'>Silver Blaze </p>
        </div>
        <div className="horse-card">
          <img src={Horse2} alt="White Blaze Horse" />
          <p className='horsename'>White Blaze</p>
        </div>
        <div className="horse-card">
          <img src={Horse3} alt="Red Rum Horse" />
          <p className='horsename'>Red Rum</p>
        </div>
        <div className="horse-card">
          <img src={Horse4} alt="Seabiscuit Horse" />
          <p className='horsename'>Seabiscuit</p>
        </div>
      </div>
      <Link to="/booking" className="book-now-btn">Book Now</Link>
    </div>
    
    </>
    
  );
};

export default LandingPage;
