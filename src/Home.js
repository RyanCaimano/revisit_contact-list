import React from "react";
import { useState } from "react";
import MapData from "./MapData";
import ContactNew from "./ContactNew";
import "./index.css";



const Home = () => {
  const [contacts, setContacts] = useState([
    {
      "id": 42226184,
      "alias": "Figgy",
      "name": "Isaac Newton",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/498px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg",
      "email": "lincolnshire@example.com",
      "phone_number": "15555555555"
    },

    {
      "id": 96436090,
      "alias": "Geometer",
      "name": "Euclid of Megara",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg/442px-Jusepe_de_Ribera_-_Euclid_-_2001.26_-_J._Paul_Getty_Museum.jpg",
      "email": "elements@example.com",
      "phone_number": "15555555555"
    },

    {
      "id": 85907747,
      "alias": "Phineas",
      "name": "Richard Feynman",
      "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Richard_Feynman_Nobel.jpg/220px-Richard_Feynman_Nobel.jpg",
      "email": "feynman_method@example.com",
      "phone_number": "15555555555"
        
    }
  ])

  

  return (
    <div>
      {/* <ContactNew /> */}
      <MapData />
    </div>
  );
}

export default Home;