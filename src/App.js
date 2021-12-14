import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div>
      <header>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:id' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;