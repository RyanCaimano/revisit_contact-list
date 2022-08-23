import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


const handleAddContact = () => {
  return (
  <Router>
    <div>
      <Link to="/contacts/new">Form</Link>
    </div>

    <Switch>
      <Route path="/contacts/new">
        {/* <Form/> */}
      </Route> 
    </Switch>
  </Router> 
  )
}



export default handleAddContact
