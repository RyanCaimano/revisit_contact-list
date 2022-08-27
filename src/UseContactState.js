import data from './data'
import { useState } from 'react'


const useContactState = () => {
  const [contacts, setContacts] = useState(data.contacts)

  const AddContact = (contact) => {
    setContacts(contacts => {
      return [...contacts, contact]
    }
    )
  }

  return { contacts, AddContact }
}

export default useContactState;