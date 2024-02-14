import { useEffect, useState } from "react";
import InstamartCard from "./InstamartCard";
import Shimmer from "./Shimmer";

const Instamart = () => {
  const [products, setProducts] = useState([])  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setProducts(jsonData.products)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("Response data:", products);

  return products.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="res-container">
        {products.map((item)=>(<InstamartCard key={item.id} data={item}/>))}
        </div>
    </div>
  );
};

export default Instamart;
