import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resList from "../utils/resList";
import ResCard, { withPromotedLabel } from "./ResCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  
  //variable for HOC of card component, passing basic card into it
  const ResCardPromoted = withPromotedLabel(ResCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&collection=83660&tags=layout_CCS_Coffee&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const json = await data.json();
    console.log(json)
    json.data.cards.splice(0, 3);
    setListRes(json?.data?.cards);
    setFilteredRes(json?.data?.cards);
    console.log(listRes);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false){
    return(<h1>OOPS ! Looks like you are offline, please check your internet connection and refresh the page.</h1>)
  }

  return listRes.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4 p-4">
      <div className="search flex items-center justify-center">
        <input
          className="border-2 rounded-lg"
          type="text"
          placeholder="Search restaurants.."
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        />
        <button className="px-4 py-[1.5px] border rounded-lg bg-amber-400" onClick={() => {
            console.log(searchVal);
            const searchList = listRes.filter((res)=>res.card.card.info.name.toLowerCase().includes(searchVal.toLowerCase()))
            setFilteredRes(searchList)
            }}>
          Search
        </button>
        <div className="px-4 py-[1.5px] border rounded-lg bg-amber-400">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listRes.filter(
                (x) => x.card.card.info.avgRating > 4.3
              );
              setListRes(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mx-40 my-6">
        {filteredRes.map((restaurant) => (
          <Link key={restaurant.card.card.info.id} to={"restaurants/"+ restaurant.card.card.info.id}>
            {restaurant.card.card.info.promoted ? <ResCardPromoted resData={restaurant}/> : <ResCard resData={restaurant} />}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;