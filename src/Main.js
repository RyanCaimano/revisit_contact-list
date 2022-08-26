import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import PersonalPage from './PersonalPage';

const Main = () => (
  <main>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path ="/contacts" render={Home} />
      <Route exact path="/contacts/new" component={Form} />
      <Route path="/contacts/:contactId" component=          {PersonalPage} />

    </Switch>
  </main>
);

export default Main;