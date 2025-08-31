import React from 'react';
import './UMFMGOPopup.css';
import { Link } from 'react-router-dom';

const UMFMGOPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
    <svg className="popup-arrow" width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9102 0.000183622L0.910156 10.0002L20.9102 10.0002L10.9102 0.000183622Z" fill="white"/>
</svg>  
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-body">
          {/* UMF Section */}
          <div className="rating-section">
            <p className="section-description">
              <span className="section-title">UMF</span> is the strength and purity rating of Manuka honey.
            </p>
            <div className="rating-scale">
              <div className="scale-item orange">10+</div>
              <div className="scale-item red">15+</div>
              <div className="scale-item pink">20+</div>
              <div className="scale-item purple">24+</div>
              <div className="scale-item blue">26+</div>
              <div className="scale-item green">28+</div>
              <div className="scale-item navy">30+</div>
            </div>
            <p className="scale-description">
              The higher the number, the greater the potency and rarity of Manuka honey.
            </p>
          </div>

          {/* MGO Section */}
          <div className="rating-section">
            <p className="section-description">
              <span className="section-title">MGO</span> is the key natural compound that gives Manuka honey its special antibacterial strength.
            </p>
            <div className="rating-scale">
              <div className="scale-item orange">263+</div>
              <div className="scale-item red">514+</div>
              <div className="scale-item pink">829+</div>
              <div className="scale-item purple">1122+</div>
              <div className="scale-item blue">1282+</div>
              <div className="scale-item green">1450+</div>
              <div className="scale-item navy">1620+</div>
            </div>
            <p className="scale-description">
              The higher the number, the higher the antibacterial properties in the honey.
            </p>
            
          </div>
          <p className='text-center m-0 p-0'><span className="close-button" onClick={onClose}>Close</span></p>
        </div>

      
      </div>
      </div>
  );
};

export default UMFMGOPopup;
