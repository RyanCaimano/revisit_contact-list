import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router-dom';

const PersonalPage = ({contactId, contacts}) => {
  const contact = _.find(contacts, {id: contactId});
 
  return (
    <div>
      
      <h1>{contact.name}</h1>
      <h2>{contact.email}</h2>
      <br></br>
      <h2>{contact.phone_number}</h2>
      <br></br>
      <h2><img src={contact.image_url} alt="here is your friend's portrait"/></h2>
      <Link className="back" to ="/">Back</Link>
    </div>
    )
  }
  
export default PersonalPage;
