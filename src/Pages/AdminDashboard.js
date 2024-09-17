import React, { useState, useEffect } from 'react';
import { generateDiscountCode, getPurchaseStats } from '../Components/API';

function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [discountCode, setDiscountCode] = useState('');

  useEffect(() => {
    async function fetchStats() {
      const data = await getPurchaseStats();
      setStats(data);
    }
    fetchStats();
  }, []);

  const handleGenerateCode = async () => {
    const code = await generateDiscountCode();
    setDiscountCode(code);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleGenerateCode}>Generate Discount Code</button>
      {discountCode && <p>New Discount Code: {discountCode}</p>}
      <h3>Purchase Stats</h3>
      <p>Items Purchased: {stats.itemsCount}</p>
      <p>Total Purchase Amount: ${stats.totalPurchase}</p>
      <p>Total Discount Amount: ${stats.totalDiscount}</p>
    </div>
  );
}

export default AdminDashboard;
