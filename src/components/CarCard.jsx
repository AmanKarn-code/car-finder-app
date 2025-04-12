import React, { useState, useRef, useEffect } from 'react';

function CarCard({ car, isWishlisted, onToggleWishlist, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);
  
  // For card tilt effect
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = `https://via.placeholder.com/300x200?text=${car.brand}+${car.name}`;
  };
  
  // Intersection Observer to trigger entrance animation when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  // Tilt effect handler
  const handleMouseMove = (e) => {
    if (!isHovered) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const resetTilt = () => {
    setRotation({ x: 0, y: 0 });
  };
  
  // Animation for wishlist button
  const handleWishlistClick = (e) => {
    e.stopPropagation();
    
    // Create heart animation element
    if (!isWishlisted) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = '❤️';
      heart.style.left = `${rect.left + rect.width / 2}px`;
      heart.style.top = `${rect.top + rect.height / 2}px`;
      
      document.body.appendChild(heart);
      
      setTimeout(() => {
        document.body.removeChild(heart);
      }, 1000);
    }
    
    onToggleWishlist();
  };
  
  return (
    <div
      ref={cardRef}
      className={`car-card ${imageLoaded ? 'loaded' : 'loading'} ${isInView ? 'in-view' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetTilt();
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered ? 'transform 0.1s ease' : 'transform 0.3s ease'
      }}
      onClick={onViewDetails}
    >
      <div className="car-image-wrapper">
        <div className="car-image">
          {!imageLoaded && <div className="image-skeleton"></div>}
          
          {/* Main image */}
          <img
            src={car.image || `https://via.placeholder.com/300x200?text=${car.brand}+${car.name}`}
            alt={`${car.brand} ${car.name}`}
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
            style={{ opacity: imageLoaded ? 1 : 0 }}
            className={`main-img ${isHovered ? 'fade-out' : 'fade-in'}`}
          />
          
          {/* Hover image */}
          <img
            src={car.image2 || car.image || `https://via.placeholder.com/300x200?text=${car.brand}+${car.name}`}
            alt={`${car.brand} ${car.name} - alternate view`}
            onError={handleImageError}
            style={{ opacity: isHovered && imageLoaded ? 1 : 0 }}
            className="hover-img"
          />
          
          <div className="image-overlay"></div>
          
          <div className="car-tags">
            {car.fuelType === 'Electric' && (
              <span className="car-tag electric">
                <span className="tag-icon">⚡</span> Electric
              </span>
            )}
            {car.fuelType === 'Hybrid' && (
              <span className="car-tag hybrid">
                <span className="tag-icon">🔋</span> Hybrid
              </span>
            )}
            {car.fuelType === 'Petrol' && (
              <span className="car-tag petrol">
                <span className="tag-icon">⛽</span> Petrol
              </span>
            )}
            {car.fuelType === 'Diesel' && (
              <span className="car-tag diesel">
                <span className="tag-icon">🛢️</span> Diesel
              </span>
            )}
          </div>
          
          <button
            className={`wishlist-toggle ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlistClick}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <span className="wishlist-icon">{isWishlisted ? '❤️' : '🤍'}</span>
          </button>
        </div>
      </div>
      
      <div className="car-info">
        <div className="car-header">
          <h3 className="car-title">{car.brand} <span className="model-name">{car.name}</span></h3>
          <p className="car-price">
            <span className="price-label">Price</span>
            <span className="price-value">${car.price.toLocaleString()}</span>
          </p>
        </div>
        
        <div className="car-specs">
          <div className="spec">
            <span className="spec-icon">⛽</span>
            <span className="spec-value">{car.fuelType}</span>
          </div>
          <div className="spec">
            <span className="spec-icon">👥</span>
            <span className="spec-value">{car.seatingCapacity} Seats</span>
          </div>
          <div className="spec">
            <span className="spec-icon">📅</span>
            <span className="spec-value">{car.year}</span>
          </div>
        </div>
        
        <div className={`car-actions ${isHovered ? 'visible' : ''}`}>
          <button className="view-details-btn" onClick={(e) => {
            e.stopPropagation();
            onViewDetails();
          }}>
            <span className="btn-text">View Details</span>
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
      
      <div className="card-shine"></div>
    </div>
  );
}

export default CarCard;