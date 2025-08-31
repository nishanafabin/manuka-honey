import React, { useState } from "react";
import Img1 from "../assets/bundleimage1.png";
import Img2 from "../assets/bundleimage2.png";
import Img3 from "../assets/bundleimage3.png";
import "./Bundle.css";
const Bundle = ({onAddToCart}) => {
    const [isOpen, setIsOpen] = React.useState({
        dropdown1: false,
        dropdown2: false
    });
    const buttonHandler = (e) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [e]: !prevState[e],
        }));
    }
      //const [quantity, setQuantity] = useState(1)
    
      const handleAddToCart = () => {
        if (onAddToCart) {
          onAddToCart()
        }
      }

  return (
    <div className="bundle-conatiner">
        <div className="bundle-header">
        <div><svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.03794 21.3498L2.38739 14.6993C0.537537 12.8494 0.537537 9.85021 2.38739 8.00032L9.03794 1.34979" stroke="black" stroke-width="1.05263" stroke-linecap="round"/>
</svg>
</div>
<div className="bundle-heder-text">Beauty Bundle</div>
<div><svg width="10" height="22" className="rotate-head" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.03794 21.3498L2.38739 14.6993C0.537537 12.8494 0.537537 9.85021 2.38739 8.00032L9.03794 1.34979" stroke="black" stroke-width="1.05263" stroke-linecap="round"/>
</svg>
</div>
</div>
<div className="flex bundle-products">
    <div className="middle-product">
        <img src={Img1} alt="bundleimage1" />
        <h3>UMF 20+</h3>
        <div className="position-relative"><button onClick={()=>buttonHandler('dropdown1')}>250g <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.83368 4.43976L8.83368 0.439758H0.833679L4.83368 4.43976Z" fill="black"/>
        </svg>
        </button>
        {isOpen.dropdown1 &&
        <ul className="dropdown">
            <li><a href="#">125g</a></li>
            <li><a href="#">250g</a></li>
            <li><a href="#">500g</a></li>
        </ul>
        }
        </div>
    </div>
    <span className="plus">+</span>
    <div className="middle-product">
        <img src={Img2} alt="bundleimage2" />
        <h3>UMF 20+</h3>
        <div className="position-relative"><button onClick={()=>buttonHandler('dropdown2')}>250g <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.83368 4.43976L8.83368 0.439758H0.833679L4.83368 4.43976Z" fill="black"/>
        </svg>
        </button>
        {isOpen.dropdown2 &&
        <ul className="dropdown">
            <li><a href="#">125g</a></li>
            <li><a href="#">250g</a></li>
            <li><a href="#">500g</a></li>
        </ul>
        }
        </div>
    </div>
    <span className="plus">+</span>
    <div className="middle-product">
        <img src={Img3} alt="bundleimage3" />
        <h3>Wooden Spoon</h3>
        
    </div>
    <div>
        <div className="flex"><span className="span1">$478.75 USD</span><span className="span2">$430.88 USD</span><span className="span3">Save 10%</span></div>
        <button className="bundle-button" onClick={()=>handleAddToCart()}>ADD BUNDLE TO CART</button>
    </div>
</div>
    </div>
  )}
export default Bundle

