
import './App.css';
import {Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Store from './components/Store'

function App() {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
      </Routes>
    
  );
}

export default App;
