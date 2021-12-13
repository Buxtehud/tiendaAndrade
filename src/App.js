import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <ItemListContainer />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;