import './App.css';
import { Home } from './views/pages/Home/Home';
import { Layout } from './views/templates/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
