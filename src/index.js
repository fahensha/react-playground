//import react and react dom
import React from "react";
import ReactDOM from "react-dom/client";

//find the root element
const el = document.getElementById("root");

//get react dom to take control of root
const root = ReactDOM.createRoot(el);

//make an element
function App() {
    return <h1>What is up my dudes?</h1>
}

//render that element using react dom
root.render(<App/>);