import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
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
    }

    return resInfo
}

export default useResMenu