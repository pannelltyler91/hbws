import './App.css';
import {Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Store from './components/Store'
import Cart from './components/Cart'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    
  );
}

export default App;
