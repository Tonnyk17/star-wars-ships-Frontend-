import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './views/pages/Home/Home';
import { Layout } from './views/templates/Layout';
import { Ships } from './views/pages/Ships/Ships';
import { Favorites } from './views/pages/Favorites.jsx/Favorites';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ships' component={Ships} />
            <Route exact path='/favorites' component={Favorites}/>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
