import ContactNew from './ContactNew'

const Form = () => {
  return (
  <div>
    <h1>Add your new contact</h1>
    <form className="add">
    <label>Image Url</label>
    <input type="text" className="form-control" />
    
    <br/>

    <label>Full Name</label>
    <input type="text" className="form-control" />

    <br/>

    <label>Email</label>
    <input type="text" className="form-control" />

    <br/>

    <label>Phone Number</label>
    <input type="text" className="form-control" />

    <br/>

    <button className="btn btn-primary" onClick={ContactNew}>Submit</button>

    </form>
  </div>
  )
}

export default Form;