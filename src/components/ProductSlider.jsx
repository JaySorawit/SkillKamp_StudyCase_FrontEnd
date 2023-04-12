import { useState } from 'react';

const products = [];

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="product-slider">
      <div className="slider-container">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`product ${currentIndex === index ? 'active' : ''}`}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handlePrevClick}>&lt;</button>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
}

export default ProductSlider;
