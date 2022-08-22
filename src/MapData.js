import data from './data';
import React from 'react';

const MapData = data.contacts.forEach(contact => {
  return (
    <div>
      <tr>
      {contact.name}, {contact.image_url},{contact.email}, {contact.phone_number}
      </tr>
    </div>
  );
});

     

export default MapData;