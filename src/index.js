//import react and react dom
import React from "react";
import ReactDOM from "react-dom/client";

//find the root element
const el = document.getElementById("root");

//get react dom to take control of root
const root = ReactDOM.createRoot(el);

//make an element
function App() {
    const message = 'Surprisingly, react cannot render js objects! stick to strings and numbers instead'
    return <h1>{message}</h1>
}

//render that element using react dom
root.render(<App/>);