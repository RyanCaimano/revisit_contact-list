import {useState} from 'react'
import {Link}  from 'react-router-dom'


const ContactNew = (props) => {
  const [image_url, setImage_url] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')

  const handleSubmit = () => {
    props.addContact({
      image_url,
      name,
      email,
      phone_number
    })

    props.history.push('/')

  }

  return (
    <div>
      <form>
        <label>Image Url</label>
        <input type='text' className='form-control'onChange={event =>
          setImage_url(event.target.value)
        }/>

        <br/>

        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          setName(parseInt(event.target.value))
        }/>

        <br/>

        <label>Email Address</label>
        <input type='text' className='form-control'onChange={event =>
          setEmail(event.target.value)
        }/>

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          setPhone_number(event.target.value)
        }/>

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>

      <Link to='/'>Back</Link>
    </div>
  )
}

export default ContactNew;