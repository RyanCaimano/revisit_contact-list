import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';

const PersonalPage = ({contactId, contacts}) => {
  const contact = _.find(contacts, {id: contactId});

  return (
    <div>
      <img src={contact.image_url} alt="here is your friend's portrait"/>
      <h1>{contact.name}</h1>
      <h2>{contact.email}</h2>
      <h2>{contact.phone_number}</h2>
      <Link to ="/">Back</Link>
    </div>
    )
  }
  
export default PersonalPage;
