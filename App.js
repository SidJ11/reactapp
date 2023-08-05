import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id:"heading"}, "Hello from React");

//React Element
const jsxHeading = <h1>This is coming with jsx</h1>

//Functional Component which returns React Element (JSX)
const HeadingComponent = () => (
    <><h1>This heading comes from functional component</h1>
    {jsxHeading}
    </>
    
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);