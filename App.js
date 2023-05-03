import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id:"heading"}, "Hello from React");

const jsxHeading = <h1>This is coming with jsx</h1>

//Functional Component
const HeadingComponent = () => {
    return <h1>This heading comes from functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);