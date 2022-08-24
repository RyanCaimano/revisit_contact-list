import React from "react";
import MapData from "./MapData";
import "./index.css";
import HandleAddContact from "./HandleAddContact";

const Home = () => {
  return (
    <div>
      <MapData />
      <button className="btn btn-primary" onClick={HandleAddContact}>Add Contact</button> 
    </div>
  )
}

export default Home;
 

