//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import SimpleCounter from "./SimpleCounter";

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));
setInterval(() => {
  
    counter++;

    root.render(< SimpleCounter counter={counter} />);
}, 1000);