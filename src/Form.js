import React, { useState } from 'react';

const Form = (props) => {
  const [image_url, setImage_url] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const uniqueId = Math.round(Math.random() * 100000000);

  const [id] = useState(uniqueId)
 
  const contactNew = () => {
    
    if (image_url === '' || name === '' || email === '' || phone_number === '') {
      alert('Please enter information for all fields')
    } else if (image_url.includes('http') === false) {
      alert('Please enter a valid image url')
    } else if (phone_number.length !== 10 || isNaN(phone_number)) {
      alert('Please enter a 10-digit phone number')
    } else if (email.includes('@') === false) {
      alert('Please enter a valid email address')
    } else if (name.includes(' ') === false) {
      alert('Please enter a valid name using a space between first and last name')
    } else {


    props.AddContact({
      image_url,
      name,
      email,
      phone_number,
      id
    })  
    
    props.history.push('/contacts');
    }}
  
  return (

    <div>
      <h1>Add your new contact</h1>
      <form className="add">

        <label>Image Url</label>
        <input type="text" className="form-control" required onChange={event =>
        setImage_url(event.target.value) 
        }/>
      
      <br/>

        <label>Full Name</label>
        <input type="text" className="form-control" required onChange={event =>
        setName(event.target.value) 
        }/>

      <br/>

        <label>Email</label>
        <input type="text" className="form-control" required onChange={event =>
        setEmail(event.target.value)
        }/>

      <br/>

        <label>Phone Number</label>
        <input type="text" className="form-control" required onChange={event =>
        setPhone_number(event.target.value)
        }/>

      <br/>

      <button type="submit" className="btn btn-primary" onClick={contactNew}>Submit</button>

      </form>
    </div>
  )
}

export default Form;