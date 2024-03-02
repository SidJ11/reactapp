import logo from "../utils/logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () =>{
    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus();

    return(
        <>
        <div className="flex justify-between shadow-lg m-2">
            <div className="logo-container">
                <div className="w-24"><img src={logo} /></div>
            </div>
          
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><button className="header-btn" onClick={()=> btnName=="Login"? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button></li>
                </ul>
            </div> 
        
        </div>
        </>
    )
}

export default Header;