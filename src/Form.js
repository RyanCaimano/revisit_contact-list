import React, { useState } from 'react'

const Form = (props) => {
  const [image_url, setImage_url] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')

  const contactNew = () => {
    props.AddContact({
      image_url,
      name,
      email,
      phone_number
    })

    props.history.push('data /')
  }
  
  return (

    <div>
      <h1>Add your new contact</h1>
      <form className="add">

        <label>Image Url</label>
        <input type="text" className="form-control" onChange={event =>
        setImage_url(event.target.value)
        }/>
      
      <br/>

        <label>Full Name</label>
        <input type="text" className="form-control" onChange={event =>
        setName(event.target.value)
        }/>

      <br/>

        <label>Email</label>
        <input type="text" className="form-control" onChange={event =>
        setEmail(event.target.value)
        }/>

      <br/>

        <label>Phone Number</label>
        <input type="text" className="form-control" onChange={event =>
        setPhone_number(event.target.value)
        }/>

      <br/>

      <button className="btn btn-primary" onClick={contactNew}>Submit</button>

      </form>
    </div>
  )
}

export default Form;