import data from './data'
import { useState } from 'react'


const AddContact = () => {
  const [contacts, setContacts] = useState(data.contacts)

  setContacts(contacts => {
    return [...contacts, contact]
  })
}

export default AddContact;