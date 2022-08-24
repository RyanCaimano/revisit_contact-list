import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Form from './Form';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contacts/new" component={Form} />
    </Switch>
  </main>
);

export default Main;