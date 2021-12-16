import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer />
        {/*<ItemDetailContainer />*/}
      </header>
    </div>
  );
}

export default App;
