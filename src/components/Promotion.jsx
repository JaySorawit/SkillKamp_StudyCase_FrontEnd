import React, { useState, useEffect } from 'react';
import '../App.css';

function Promotion() {
  const [Promotion, setPromotion] = useState([
    'Free Shipping Over $50','Get 10% Off - Use Coupon Code HAPPY123'
  ]);

  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentPromotionIndex(
          (currentPromotionIndex + 1) % Promotion.length
        );
        setIsFading(false);
      }, 2000);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentPromotionIndex, Promotion.length]);

  return (
        <div className="fade-text">
        <p className={isFading ? 'fade-out' : 'fade-in'}>
            {Promotion[currentPromotionIndex]}
        </p>
        </div>
  );
}

export default Promotion;
