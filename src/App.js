import './App.css';
import {Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Store from './components/Store'
import Cart from './components/Cart'
import About from './components/About';
import Contact from './components/Contact';
import Success from './components/Succes';
import Cancel from './components/Cancel';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="/cancel" element={<Cancel/>} />
      </Routes>
    
  );
}

export default App;
