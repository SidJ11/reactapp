import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useResMenu from "../utils/useResmenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {
    // const [resInfo, setResInfo] = useState(null)

    //Read Restaurant ID from URL
    const {resId} = useParams();
    const resInfo = useResMenu(resId) //fetching data using custom hook

    // useEffect(()=> {
    //     fetchMenu();
    // },[]);

  //45607 - Domino's id
  //150561 - Yummy Burgers
  //83637- Another Burger

  // const fetchMenu = async () => {
  //   try {
  //     const response = await fetch(MENU_API+resId); // Use your MENU_API constant here
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch menu data");
  //     }
  //     const json = await response.json();
  //     setResInfo(json);
  //   } catch (error) {
  //     console.error("Error fetching menu data:", error);
  //   }
  // };

  if (resInfo == null) return <Shimmer/>
  const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[0]?.card?.card?.info;

  const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards)
  console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards)

  const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=> c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  // console.log(categories)

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <h2 className="font-semibold text-xl">{cuisines.join(", ")}</h2>
        <h3 className="font-semibold text-lg">{costForTwoMessage}</h3>
      </div>

      {/* Categories */}
      <div className="my-10">
      {categories.map((cat) => <ResCategory data={cat?.card?.card}/>)}
      </div>


        {/* <ul>
            {itemCards.map(x => <li key={x?.card?.info?.id}>{x?.card?.info?.name} - Rs.{x?.card?.info?.price/100}</li>
           )}
        </ul>
        <br></br>
        {categories.map((item)=> {
          return (
          <div>
            <ul>{item?.card?.card?.title}</ul>
            {item?.card?.card?.itemCards?.card?.info?.name}
            {console.log(item?.card?.card?.itemCards?.card?.info?.name)}
          </div>
          )})} */}
    </div>
  )
}

export default ResMenu