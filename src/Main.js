import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import PersonalPage from './PersonalPage';
import useContactState from './useContactState';

const Main = () => {
  const { contacts, AddContact } = useContactState();
  
  return (
    
  <main>
    <Switch>

      <Route exact path='/' render= {() => 
        <Home contacts={contacts} />    
      } />

      <Route exact path ='/contacts' render= {(routerProps) => 
        <Home history={routerProps.history} contacts={contacts} />
      } />

      <Route exact path='/contacts/new' render={ (routerProps) =>
        <Form history={routerProps.history} AddContact={AddContact} />

      } />
      <Route path='/contacts/:contactId' render= { (routerProps) =>
      <PersonalPage contactId={parseInt(routerProps.match.params.contactId)} contacts={contacts} /> 
      } />

    </Switch>
  </main>
)};

export default Main;