// src/components/CarCard.jsx
import { useState } from 'react';

function CarCard({ car, isWishlisted, onToggleWishlist, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/300x200?text=${car.brand}+${car.name}`;
  };

  return (
    <div 
      className={`car-card ${imageLoaded ? 'loaded' : 'loading'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="car-image">
        {!imageLoaded && <div className="image-skeleton"></div>}
        <img 
          src={
            isHovered
              ? car.image2 || `https://via.placeholder.com/300x200?text=${car.brand}+${car.name}`
              : car.image || `https://via.placeholder.com/300x200?text=${car.brand}+${car.name}`
          }
          alt={`${car.brand} ${car.name}`} 
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          style={{ opacity: imageLoaded ? 1 : 0 }}
          className='main-img'
        />

        <div className="car-tags">
          {car.fuelType === 'Electric' && <span className="car-tag electric">Electric</span>}
          {car.fuelType === 'Hybrid' && <span className="car-tag hybrid">Hybrid</span>}
          {car.fuelType === 'Petrol' && <span className="car-tag hybrid petrol">Petrol</span>}
          {car.fuelType === 'Diesel' && <span className="car-tag hybrid diesel">Diesel</span>}

        </div>

        <button 
          className={`wishlist-toggle ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist();
          }}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="car-info">
        <div className="car-header">
          <h3>{car.brand} {car.name}</h3>
          <p className="car-price">${car.price.toLocaleString()}</p>
        </div>

        <div className="car-specs">
          <div className="spec">
            <span className="spec-icon">⛽</span>
            <span className="spec-value">{car.fuelType}</span>
          </div>
          <div className="spec">
            <span className="spec-icon">👥</span>
            <span className="spec-value">{car.seatingCapacity}</span>
          </div>
          <div className="spec">
            <span className="spec-icon">📅</span>
            <span className="spec-value">{car.year}</span>
          </div>
        </div>

        <div className={`car-actions ${isHovered ? 'visible' : ''}`}>
          <button className="view-details-btn" onClick={onViewDetails}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
