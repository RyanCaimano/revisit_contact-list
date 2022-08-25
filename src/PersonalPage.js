import _ from 'lodash';
import React from 'react';

const PersonalPage = ({contactId, contacts}) => {
  const contact = _.find(contacts, {id: contactId});

  return (
    <div>
      <h1>{contact.image_url}</h1>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone_number}</p>
    </div>
    )
  }
  
export default PersonalPage;
