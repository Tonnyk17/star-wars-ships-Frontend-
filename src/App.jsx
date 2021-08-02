import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/pages/Home/Home';
import { Layout } from './views/templates/Layout';
import { Ships } from './views/pages/Ships/Ships';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ships' component={Ships} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
