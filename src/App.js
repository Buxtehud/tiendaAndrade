import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {data} from './products';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer items = {data}/>
      </header>
    </div>
  );
}

export default App;
