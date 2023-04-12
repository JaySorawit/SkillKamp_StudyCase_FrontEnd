import { useState, useEffect } from 'react';
import banner1 from '../assets/Happykids-Materials/Banner1.png';
import banner2 from '../assets/Happykids-Materials/Banner2.png';
import banner3 from '../assets/Happykids-Materials/Banner3.png';

const images = [banner1, banner2, banner3];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slider-image ${currentIndex === index ? 'active' : ''}`}
          />
        ))}
        <div className="dot-container">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
            ></button>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button onClick={handlePrevClick}>&lt;</button>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
}

export default ImageSlider;
