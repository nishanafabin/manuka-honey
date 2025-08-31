import React, { useState } from 'react'
import './ProductCard.css'


import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'

const products = [
  { id: 1, img: product1, weight: '125g | 4.4oz' },
  { id: 2, img: product2, weight: '250g | 8.8oz' },
  { id: 3, img: product3, weight: '500g | 17.6oz' },
  { id: 4, img: product4, weight: '1kg | 35oz' },
  { id: 5, img: product5, weight: '1.5kg | 52oz' },
  { id: 6, img: product6, weight: '2kg | 70oz' },
  { id: 7, img: product7, weight: '2.5kg | 88oz' },
]

const ProductCard = ({ onAddToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [quantity, setQuantity] = useState(1)
  const [paymentOption, setPaymentOption] = useState('one-time')

  const increment = () => setQuantity(q => q + 1)
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1))

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...selectedProduct,
        quantity,
        paymentOption,
      })
    }
  }

  return (
    <div className="product-card">
      
      <div className="variant-display">
        <h1>SIZE (SELECT ONE)</h1>
        <h2>Variant: {selectedProduct.weight}</h2>
      </div>

      
      <div className="product-grid">
        {products.map(product => (
          <div
            key={product.id}
            className={`product-option ${
              selectedProduct.id === product.id ? 'active' : ''
            }`}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.img} alt={`Product ${product.id}`} />
          </div>
        ))}
      </div>

      
      <div className="payment-options">
        <h3>PAYMENT OPTIONS (SELECT ONE)</h3>
        <div className='payment-selection'>
            <div className="options">
            <button
                className={paymentOption === 'one-time' ? 'selected' : ''}
                onClick={() => setPaymentOption('one-time')}
            >
                <span>One-time purchase</span>  <span>$55.88 USD</span>
            </button>
            <button
                className={paymentOption === 'subscribe' ? 'selected' : ''}
                onClick={() => setPaymentOption('subscribe')}
            >
                <span>Subscribe & save 20%</span> <span>$44.70 USD</span> 
            </button>
            </div>
            <p className="subscription-info">What is a Subscription?</p>
        </div>
      </div>

      
      <h1 className="select-quantity">SELECT QUANTITY</h1>
      <div className="action-section">
        <div className="quantity-selector">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>

        <button className="add-to-cart" onClick={()=>handleAddToCart()}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
