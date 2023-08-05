import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <>
        <div className="header">
        Logo
        <br></br>
        Navbar
        </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);