import _ from 'lodash';


const PersonalPage = ({contactId, contacts}) =>  {
  const contact = _.find(contacts, {id: contactId});

  return (
    <div>
      <h1>{contact.image_url}</h1>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
}

export default PersonalPage;