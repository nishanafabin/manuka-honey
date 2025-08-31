import React from 'react'
import Header from './components/Header';
import Slider from './components/Slider';
import ProductDetails from './components/ProductDetails';
const Home = () => {
   const [cartCount, setCartCount] = React.useState(0);

   const handleAddToCart = (product) => {
     setCartCount(cartCount + product.quantity);
     //console.log("Product added to cart:", product);
   };
   const handleBundleAddToCart = (product) => {
     setCartCount(cartCount + 3);
     console.log("Product added to cart:", product);
   };
  return (
    <>
     <Header cartCount={cartCount} />
      <main className="main-content">
        <div className="product-layout">
          <Slider />
          <ProductDetails handleAddToCart={handleAddToCart} handleBundleAddToCart={handleBundleAddToCart} />
          
        </div>
      </main>
    </>
  )
}

export default Home
