import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(storedCart.length);
  }, []);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">E-Commerce Store</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span className="cart-count">({cartCount})</span>
          </Link>
        </li>
        <li>
          <Link to="/admin">Admin Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
