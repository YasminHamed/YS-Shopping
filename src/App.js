
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Form from './components/Form';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/login" element={<Form/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
