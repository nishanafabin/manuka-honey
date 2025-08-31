import React, { useState, useEffect } from 'react'
import './Slider.css'
import bottleImage from '../assets/Bottle.png'
import ImageGrid from './ImageGrid'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 1, image: bottleImage },
    { id: 2, image: bottleImage },
    { id: 3, image: bottleImage }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev =>
        prev === slides.length - 1 ? 0 : prev + 1
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="slider-container">
      
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map(slide => (
            <div key={slide.id} className="slide">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="image-grid-wrapper">
        <ImageGrid />
      </div>
    </div>
  )
}

export default Slider
