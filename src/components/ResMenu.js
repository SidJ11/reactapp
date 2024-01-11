import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null)

    //Read Restaurant ID from URL
    const {resId} = useParams();

    useEffect(()=> {
        fetchMenu();
    },[]);

  //45607 - Domino's id
  //150561 - Yummy Burgers
  //83637- Another Burger
  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API+resId); // Use your MENU_API constant here
      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }
      const json = await response.json();
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API+resId)
  //   const json = await data.json();
  //   console.log(json)
  //   setResInfo(json)
  //   console.log(resInfo)
  // }
  if (resInfo == null) return <Shimmer/>
  const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;

  const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards)
  return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h3>{costForTwoMessage}</h3>
        <ul>
            {itemCards.map(x => <li key={x?.card?.info?.id}>{x?.card?.info?.name} - Rs.{x?.card?.info?.price/100}</li>
           )}
        </ul>
    </div>
  )
}

export default ResMenu