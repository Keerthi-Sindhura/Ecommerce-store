import React from 'react'

const items = [
    {
        "id": 1,
        "name": "t-shirt",
        "price": 20
    },
    {
        "id": 1,
        "name": "pant",
        "price": 10
    },
    {
        "id": 1,
        "name": "short",
        "price": 30
    },
    {
        "id": 1,
        "name": "socks",
        "price": 50
    },
    {
        "id": 1,
        "name": "shoes",
        "price": 40
    }
]

const ItemList = ({ addToCart }) => {
  return (
    <>
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default ItemList;