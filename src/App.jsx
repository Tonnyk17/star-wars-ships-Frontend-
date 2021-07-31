import './App.css';
import { HeaderText } from './views/atoms/Typography/HeaderText';
import { IconButton } from './views/atoms/IconButton';
import iconImage from './assets/images/menu.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderText>Hello friend</HeaderText>
        <IconButton image={iconImage} name={'menu'} />
      </header>
    </div>
  );
}

export default App;
