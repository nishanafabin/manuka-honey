import React, { useState } from 'react';
import './ProductDetails.css';
import ratingImage from '../assets/Rating.png';
import UMFMGOPopup from './UMFMGOPopup';
import ProductCard from './ProductCard';
import ProductInfo from './ProductInfo';
import Bundle from './Bundle';
import Certifications from './Certifications';
// ✅ Import certification images
import cert1 from '../assets/certifications1.png';
import cert2 from '../assets/certifications2.png';
import cert3 from '../assets/certifications3.png';
import cert4 from '../assets/certifications4.png';
import cert5 from '../assets/certifications5.png';
import cert6 from '../assets/certifications6.png';


const ProductDetails = ({handleAddToCart, handleBundleAddToCart}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(!isPopupOpen);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="product-details">
      <h1 className="product-title">Manuka Honey<br />UMF™ <span>24+</span><br />MGO <span>1122+</span></h1>
      
      <div className="product-specs position-relative">
     
        <div className="position-relative">
        <button className="info-link" onClick={openPopup}>
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0659 4.96362C9.82035 2.7181 6.17965 2.7181 3.93413 4.96362C1.68862 7.20913 1.68862 10.8498 3.93414 13.0954C6.17965 15.3409 9.82035 15.3409 12.0659 13.0954C14.3114 10.8498 14.3114 7.20913 12.0659 4.96362ZM2.87347 3.90296C5.70477 1.07165 10.2952 1.07165 13.1265 3.90296C15.9578 6.73426 15.9578 11.3247 13.1265 14.156C10.2952 16.9873 5.70478 16.9873 2.87348 14.156C0.0421758 11.3247 0.0421741 6.73426 2.87347 3.90296ZM8 8.27948C8.41421 8.27948 8.75 8.61527 8.75 9.02948V12.0295C8.75 12.4437 8.41421 12.7795 8 12.7795C7.58579 12.7795 7.25 12.4437 7.25 12.0295V9.02948C7.25 8.61527 7.58579 8.27948 8 8.27948ZM8 5.02948C7.44772 5.02948 7 5.4772 7 6.02948C7 6.58176 7.44772 7.02948 8 7.02948C8.55228 7.02948 9 6.58176 9 6.02948C9 5.4772 8.55228 5.02948 8 5.02948Z" fill="#666666"/>
            </svg>

          <span>What is UMF and MGO?</span>
        </button>
        
        </div>
        <UMFMGOPopup isOpen={isPopupOpen} onClose={closePopup} />
      </div>
      
      
      <div className="reviews-section">
        <div className="review-row">
          <div className="reviewer-name">The Optimiser</div>
          <div className="rating">
            <div className="rating-stars-container">
              <img src={ratingImage} alt="Star 1" className="rating-star" />
              <img src={ratingImage} alt="Star 2" className="rating-star" />
              <img src={ratingImage} alt="Star 3" className="rating-star" />
              <img src={ratingImage} alt="Star 4" className="rating-star" />
              <img src={ratingImage} alt="Star 5" className="rating-star" />
            </div>
            <span className="review-count">825 REVIEWS</span>
          </div>
        </div>
      </div>
      
      <div className="product-description">
        <p>
          For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey 
          is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand 
          and great for almost all uses. It has a full, delicious flavour and your body will love you for it.
        </p>
      </div>

      {/* ✅ Certifications Row */}
      <div className="certifications-row">
        <img src={cert1} alt="Certification 1" className="cert-logo" />
        <img src={cert2} alt="Certification 2" className="cert-logo" />
        <img src={cert3} alt="Certification 3" className="cert-logo" />
        <img src={cert4} alt="Certification 4" className="cert-logo" />
        <img src={cert5} alt="Certification 5" className="cert-logo" />
        <img src={cert6} alt="Certification 6" className="cert-logo" />
      </div>
      
      
      <ProductCard onAddToCart={handleAddToCart} />
      <br/>
      <Bundle onAddToCart={handleBundleAddToCart}/>
      <br/>
      <ProductInfo/>
      <br/>
      <Certifications/>
    </div>
  );
};

export default ProductDetails;
