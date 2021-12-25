import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div className='bg-shopPrimary h-screen'>
        <CartContextProvider>
          <BrowserRouter>
          <header className='w-screen m-0 p-0'>
            <NavBar />
          </header>
          <div className='mx-auto my-20 w-3/4'>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
              </Routes>
          </div>
          </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;