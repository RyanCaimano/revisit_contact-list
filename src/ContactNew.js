import {Route, Link} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';


const ContactNew = (props) => {
  const [image_url, setImage_url] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')

  const handleAddContact = () => {
    props.addContact({
      image_url,
      name,
      email,
      phone_number,
    })
    props.history.push('/contacts/new')
  }
  return (
    <div>
      <form>
        <div className="form-group">
          <label>`"`Image URL`"`</label>
          <input type="text" className="form-control" value={image_url} onChange={event => setImage_url(event.target.value)
          } />

          <br/>

          <label>Full Name</label>
          <input type="text" className="form-control" value={name} onChange={event => setName(event.target.value)
          } />

          <br/>

          <label>Email</label>
          <input type="text" className="form-control" value={email} onChange={event => setEmail(event.target.value)
          } />

          <br/>

          <label>Phone Number</label>
          <input type="text" className="form-control" value={phone_number} onChange={event => setPhone_number(event.target.value)
          } />

          <button type="button" className="addButton" onClick={handleAddContact}>Back</button>
          
          <Link to="/contacts">Back</Link>
          <Route path="/contacts" render={() => <Home />} />
          

        </div>          
      </form>
    </div>
  )
}

export default ContactNew;