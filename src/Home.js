import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import MapData from "./MapData";
import handleAddContact from "./ContactsNew";
import "./index.css";



const Home = () => {
  return (
    <div>
      <MapData />
      <button className="buttonAdd" onClick={handleAddContact}>Add Contact</button>
    </div>
  )
}

export default Home;
 
