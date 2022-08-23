import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({contactId, contacts}) => {
  const contact = _.find(contacts, {id: contactId})
  return (
    <div>
      <h1>{contact.name}</h1>
      <img src={contact.image_url} alt={contact.name} />
      <p>{contact.email}</p>
      <p>{contact.phone_number}</p>
    </div>
  )
}
