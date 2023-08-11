import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/logo.png"
import resList from "./resList";

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

const ResCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, locality} = resData?.data.data
    return(
        <div className="res-card">
            <div className="res-img-container"><img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} /></div>
            <div className="res-details">
                <div className="res-namerating"> <div className="res-name">{name}</div>
                <div className="res-rating">{avgRating}⭐</div></div>
                <div className="res-cuisines">{cuisines.join(", ")}</div>
                <div className="res-costfortwo">₹{costForTwo/100} for two</div>
                <div className="res-location">{locality}</div>
            </div>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search Restaurants</div>
            <div className="res-container">
            {resList.map((restaurant)=> <ResCard key={restaurant.data.data.id} resData={restaurant}/>)}
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