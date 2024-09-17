import React, { useState } from 'react';
import Itemlist from '../Components/ItemList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const addToCart = (item) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart, item];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        navigate('/cart');
    };
  return (
    <div>
        <Itemlist addToCart={addToCart}/>
    </div>
  )
}

export default Home