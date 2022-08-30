import React from "react";
import MapData from "./MapData";
import "./index.css";
import HandleAddContact from "./HandleAddContact";


const Home = ({contacts}) => {
  
  return (
    <div>
      <div>
      <h1>Contact List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Email address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
      <MapData contacts={contacts}/>
      </table>
    </div>
      <button type="button" className="btn btn-primary" onClick={HandleAddContact}>Add Contact</button> 
    </div>
  )
}

export default Home;
 

