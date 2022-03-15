import React from "react";


function Header(){
   
    return(
<>
<div className="part1">

<div className="content">
<div className="heading">
    <div className="logos" >
        <img className="logo" src="./Images/logo.png" alt="Swiggy-Logo" />
</div>
    <div className="btn">
    <a className="login" href="#login">Login</a>
        <a className="sign-up" href="#sign">Sign up</a>
        
    </div>
    </div>
    <div className="Title">
    <h1 className="topic">Hungry?</h1>
    <h2 className="head">Order food from favourite restaurants near you.</h2>

    <div className="btns">
        <div className="input">
        <input type="text" placeholder="Enter your delivery location" autocomplete="off"/><span className="locate-me"><i className="fas fa-crosshairs"></i>Locate Me</span>
        <span className="food"><p className="pp">FIND FOOD</p>
    </span></div>
    </div>
<h3 className="City">Popular cities in India</h3>
<ul className="cities">
    <li className="c1"> <a className="c11" href="/Ahmedabad">Ahmedabad</a></li>
    <li className="c1"> <a className="c12" href="/Bangalorea">Bangalorea</a></li>
    <li className="c1"><a className="c11" href="/Chennai">Chennai </a></li>
    <li className="c1"> <a className="c12" href="/Delhi">Delhi</a></li>
    <li className="c1"><a className="c11" href="/Gurgaon">Gurgaon </a></li>
    <li className="c1"> <a className="c12" href="/Hyderabad">Hyderabad</a></li>
    <li className="c1"> <a className="c11" href="/Kolkata">Kolkata</a></li>
    <li className="c1"> <a className="c12" href="/Mumbai">Mumbai</a> </li>
    <li className="c1"><a className="c11" href="/Pune">Pune </a></li>
    <li className="c1"><a className="c12" href="#city-link">& more</a></li>
</ul>
</div>
</div>
    <div className="image" >
<img className="side-img" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" alt="" />
    </div>
    
</div>
</>
);
}

export default Header;