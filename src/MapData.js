import {Link} from 'react-router-dom';
import React from 'react';

const MapData = (props) => {
  
  
  return (
    props.contacts.map(contact => (
      <tbody key={contact.alias}>
        <tr key={contact.id}>
          <td key={`${contact.image_url}`}>
            <img src={`${contact.image_url}`} alt="here is your friend's portrait"/>
          </td>
          <td className="column2" key={`${contact.name}`}><Link className="personalPage" to={`/contacts/${contact.id}`}>{`${contact.name}`}</Link></td>
          <td className="column3" key={`${contact.email}`}>{`${contact.email}`}</td>
          <td className="column4" key={`${contact.phone_number}`}>{`${contact.phone_number}`}</td>
        </tr> 
      </tbody>
    ))
  );
}

export default MapData;


