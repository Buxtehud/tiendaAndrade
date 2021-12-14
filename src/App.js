import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import {CartContext} from './context/CartContext';

function App() {
  return (
    <div>
      <header>
        <CartContext.Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
        </CartContext.Provider>
      </header>
    </div>
  );
}

export default App;