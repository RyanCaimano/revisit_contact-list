import React from "react";
import MapData from "./MapData";
import "./index.css";
import HandleAddContact from "./HandleAddContact";


const Home = ({contacts}) => {
  
  return (
    <div>
      <MapData contacts={contacts}/>
      <button type="button" className="btn btn-primary" onClick={HandleAddContact}>Add Contact</button> 
    </div>
  )
}

export default Home;
 

