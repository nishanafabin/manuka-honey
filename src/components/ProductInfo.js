import React, { useState } from "react";
import "./ProductInfo.css";
import ColourclubLogo from "../assets/ColourclubLogo.png";

const UMFScale = [
  "UMF™ 10+",
  "UMF™ 15+",
  "UMF™ 20+",
  "UMF™ 24+",
  "UMF™ 26+",
  "UMF™ 28+",
  "UMF™ 30+",
];

const ProductInfo = () => {
  const [selectedUMF, setSelectedUMF] = useState("UMF™ 24+");
  const [tasteProfile, setTasteProfile] = useState(50);

  return (
    <div className="product-info">
      {/* Reward Points */}
      <div className="reward-points">
        <img src={ColourclubLogo} alt="Colourclub Logo" className="colourclub-logo" />

        <div>Colourclub members earn up to <span className="points">56</span> reward points when buying this item. Sign up or log in</div>
      </div>

      {/* Delivery Info */}
      <div className="delivery-info">
        <p>DELIVERY<br/><span className="span-info">FREE DELIVERY ON ORDERS OVER $30</span></p>
        <p>ESTIMATED DELIVERY DATE: <br/><span className="span-info">Jun 9 - Jun 13 to</span></p>
      </div>

      <hr />

      {/* Afterpay Info */}
      <div className="afterpay-info">
        <p>AFTER PAY</p>
        <p className="Info-2">
          or 4 interest-free payments of $13.97 with{" "}
          <span className="afterpay-icon">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.7777 6.87007C9.08632 7.36682 10.1418 8.32721 10.1418 9.9498C10.1418 11.9841 8.49204 13.4857 5.91676 13.6446L5.6655 14.8478C5.64094 14.9654 5.53763 15.0497 5.41791 15.0497H3.43671C3.27342 15.0497 3.15294 14.8966 3.19064 14.7371L3.50863 13.3915C2.2321 13.0268 1.20491 12.3174 0.606099 11.4418C0.530704 11.3315 0.555719 11.1809 0.660852 11.0987L2.04563 10.0174C2.15976 9.92816 2.32336 9.95429 2.40772 10.0722C3.14151 11.0976 4.26722 11.7049 5.62334 11.7049C6.8436 11.7049 7.76715 11.1089 7.76715 10.2479C7.76715 9.58561 7.30533 9.28751 5.75525 8.95641C3.08379 8.39339 2.02839 7.39991 2.02839 5.77725C2.02839 3.89454 3.60424 2.47231 5.9813 2.28759L6.2408 1.04485C6.26537 0.927241 6.36868 0.843018 6.4883 0.843018H8.443C8.60425 0.843018 8.72424 0.992498 8.69014 1.15073L8.38965 2.54318C9.41256 2.85932 10.2454 3.42459 10.7639 4.12213C10.8442 4.23025 10.8236 4.38335 10.7196 4.46889L9.45629 5.50913C9.34647 5.59952 9.18614 5.57978 9.09686 5.46892C8.45483 4.67148 7.44393 4.22082 6.34888 4.22082C5.12861 4.22082 4.37007 4.75067 4.37007 5.51233C4.37007 6.14151 4.9637 6.4727 6.7777 6.87007Z"
                fill="white"
              />
            </svg>
          </span>{" "}
          <span className="afterpay-name">Afterpay</span>
          <span className="icon-2" style={{ marginTop: "10px" }}>
            <svg
                width="18"
                height="18"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1084 3.95922C9.14359 1.99439 5.95797 1.99439 3.99314 3.95922C2.02832 5.92404 2.02832 9.10965 3.99315 11.0745C5.95797 13.0393 9.14359 13.0393 11.1084 11.0745C13.0733 9.10965 13.0733 5.92404 11.1084 3.95922ZM3.06507 3.03114C5.54246 0.553748 9.55908 0.553748 12.0365 3.03114C14.5139 5.50853 14.5139 9.52514 12.0365 12.0025C9.55908 14.4799 5.54246 14.4799 3.06508 12.0025C0.587685 9.52514 0.587684 5.50853 3.06507 3.03114ZM7.55078 6.86059C7.91322 6.86059 8.20703 7.15441 8.20703 7.51684V10.1418C8.20703 10.5043 7.91322 10.7981 7.55078 10.7981C7.18835 10.7981 6.89453 10.5043 6.89453 10.1418V7.51684C6.89453 7.15441 7.18835 6.86059 7.55078 6.86059ZM7.55078 4.01684C7.06754 4.01684 6.67578 4.4086 6.67578 4.89184C6.67578 5.37509 7.06754 5.76684 7.55078 5.76684C8.03403 5.76684 8.42578 5.37509 8.42578 4.89184C8.42578 4.4086 8.03403 4.01684 7.55078 4.01684Z"
                fill="#666666"
                />
            </svg>
            </span>

        </p>
      </div>
      <hr/>

      {/* UMF Scale */}
      <div className="umf-scale">
        <p><strong>UMF™ SCALE</strong></p>
        {/* <div className="umf-options">
          {UMFScale.map((umf) => (
            <button
              key={umf}
              className={`umf-button ${selectedUMF === umf ? "active" : ""}`}
              onClick={() => setSelectedUMF(umf)}
            >
              {umf}
            </button>
          ))}
        </div> */}
        <div className="rating-scale1">
            
              <div className="scale-item orange1">UMF™ 10+</div>
              <div className="scale-item red1">UMF™ 15+</div>
              <div className="scale-item pink1">UMF™ 20+</div>
              <div className="scale-item purple1">UMF™ 24+</div>
              <div className="scale-item blue1">UMF™ 26+</div>
              <div className="scale-item green1">UMF™ 28+</div>
              <div className="scale-item navy1">UMF™ 30+</div>
            </div>
      </div>

      {/* Taste Profile Slider */}
      <div className="taste-profile">
        <p><strong>TASTE PROFILE</strong></p>
        <input
  type="range"
  min="0"
  max="100"
  value={tasteProfile}
  onChange={(e) => setTasteProfile(Number(e.target.value))}
  style={{
    background: `linear-gradient(to right,
      #e67e22 0%,   /* orange */
      #c0392b 14%,  /* red */
      #d46a9f 28%,  /* pink */
      #6c3483 42%,  /* purple */
      #2980b9 57%,  /* blue */
      #27ae60 71%,  /* green */
      #2c3e50 85%,  /* navy */
      #ddd 100%)`,  /* gray end */
  }}
/>


            <p className="labels">
          <span>Clean & Light</span>
          <span>Bold & Intense</span>
          </p>
        
      </div>
    </div>
  );
};

export default ProductInfo;
