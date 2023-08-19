import { useState } from "react";
import resList from "../utils/resList";
import ResCard from "./ResCard";

const Body = () =>{

    const [listRes, setListRes] = useState(resList)
    return(
        <div className="body">
            <div className="search">Search Restaurants</div>
            <div className="filter"><button className="filter-btn" onClick={()=>{
                const filteredList = listRes.filter((x)=>x.data.data.avgRating>4.1)
                setListRes(filteredList)
            }}>Top Rated</button></div>
            <div className="res-container">
            {listRes.map((restaurant)=> <ResCard key={restaurant.data.data.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;