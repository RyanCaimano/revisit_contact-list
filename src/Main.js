import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import ContactsNew from './ContactsNew';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contacts/new" component={ContactsNew} />
    </Switch>
  </main>
);

export default Main;