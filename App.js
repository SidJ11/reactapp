import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png"

const Header = () =>{
    return(
        <>
        <div className="header">
            
            <div className="logo"><img src={logo} />
            </div>
          
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div> 
        
        </div>
        </>
    )
}

const ResCard = ({name, rating}) =>{
    return(
        <div className="res-card">
            <div className="res-img-container"><img className="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee4f041cd8611dccc19f4267783ab5ea" /></div>
            <div className="res-details">
                <div className="res-name">{name}</div>
                <div className="res-rating">{rating}⭐</div>
                <div className="res-cuisines">Some cusinies go here</div>
                <div className="res-location">Location</div>
            </div>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search Restaurants</div>
            <div className="res-container">
                <ResCard name="FoodPoint" rating="4" />
                <ResCard name="FoodPoint" rating="4" />
                <ResCard name="FoodPoint" rating="4" />
                <ResCard name="FoodPoint" rating="4" />
                <ResCard name="FoodPoint" rating="4" />
                <ResCard name="FoodPoint" rating="4" />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);