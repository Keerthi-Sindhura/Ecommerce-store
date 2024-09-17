export async function validateDiscountCode(code) {
    return code === 'DISCOUNT10';
  }
  
  export async function checkout(cart, discountCode) {
    const discount = discountCode === 'DISCOUNT10' ? 0.1 : 0;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const finalAmount = total - total * discount;
    
    return { success: true, total: finalAmount };
  }
  
  export async function generateDiscountCode() {
    return 'DISCOUNT10';
  }
  
  export async function getPurchaseStats() {
    return {
      itemsCount: 10,
      totalPurchase: 200,
      totalDiscount: 20,
    };
  }
  