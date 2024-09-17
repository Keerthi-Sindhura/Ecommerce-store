import React, { useState, useEffect } from 'react';
import { validateDiscountCode, checkout } from '../Components/API';

function Checkout() {
  const [cart, setCart] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [discountValid, setDiscountValid] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleDiscountCode = async () => {
    const isValid = await validateDiscountCode(discountCode);
    setDiscountValid(isValid);
  };

  const handleCheckout = async () => {
    const response = await checkout(cart, discountCode);
    if (response.success) {
      alert('Order placed successfully!');
      localStorage.removeItem('cart'); // Clear cart after successful checkout
    } else {
      alert('Checkout failed.');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <input
        type="text"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
        placeholder="Enter discount code"
      />
      <button onClick={handleDiscountCode}>Apply Code</button>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;
