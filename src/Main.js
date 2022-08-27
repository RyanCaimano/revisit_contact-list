import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import PersonalPage from './PersonalPage';
import useContactState from './UseContactState';

const Main = () => {
  const { contacts, AddContact } = useContactState();
  
  return (
  <main>
    <Switch>

      <Route exact path="/" component= {() => 
        <Home contacts={contacts} />    
      } />
      <Route exact path ="/contacts" render={Home} />
      <Route exact path="/contacts/new" component={ () =>
        <Form AddContact={AddContact} />
      } />
      <Route path="/contacts/:contactId" component=          {PersonalPage} />

    </Switch>
  </main>
)};

export default Main;