import data from './data';
import React from 'react';



const MapData = (contact) => {
  return (
    <div>
      <h1>Contact List</h1>
      <table className="table table-bordered">
        {data.contacts.map(contact => (
          <tbody>
            <tr>
            <td><img src={`${contact.image_url}`} alt="here is your friend's portrait"/></td>
              <td>{`${contact.name}`}</td>
              <td>{`${contact.email}`}</td>
              <td>{`${contact.phone_number}`}</td>
            </tr> 
          </tbody>
        ))};
      </table>
    </div>
  );
}

export default MapData;


