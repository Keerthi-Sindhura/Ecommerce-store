import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import AdminDashboard from './Pages/AdminDashboard';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
