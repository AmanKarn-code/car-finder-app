import { useEffect, useState } from 'react';

function CarDetails({ car, onClose, isWishlisted, onToggleWishlist }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [animationDirection, setAnimationDirection] = useState('forward');
  const images = [car.image, car.image2].filter(Boolean);

  // Animation entrance effect
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  // Image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationDirection('forward');
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNextImage = () => {
    setAnimationDirection('forward');
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setAnimationDirection('backward');
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for the exit animation to complete
  };

  return (
    <div className={`car-details-overlay ${isVisible ? 'visible' : ''}`}>
      <div className={`car-details-modal ${isVisible ? 'slide-in' : 'slide-out'}`}>
        <button className="close-btn pulse-effect" onClick={handleClose}>
          <span className="close-icon">×</span>
        </button>
        
        <div className="car-details-content">
          <div className="car-details-image-container">
            <div className="image-navigation">
              <button className="nav-btn prev-btn" onClick={handlePrevImage}>
                <span>‹</span>
              </button>
              <button className="nav-btn next-btn" onClick={handleNextImage}>
                <span>›</span>
              </button>
            </div>
            
            <div className="image-carousel">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image || `https://via.placeholder.com/600x400?text=${car.brand}+${car.name}`}
                  alt={`${car.brand} ${car.name}`}
                  className={`carousel-image ${
                    index === currentImageIndex ? 'active' : ''
                  } ${
                    index === currentImageIndex ? `slide-${animationDirection}` : ''
                  }`}
                />
              ))}
            </div>
            
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => {
                    setAnimationDirection(index > currentImageIndex ? 'forward' : 'backward');
                    setCurrentImageIndex(index);
                  }}
                ></span>
              ))}
            </div>
          </div>
          
          <div className="car-details-info">
            <div className="car-details-header fade-in">
              <h2 className="car-title-animated">{car.brand} <span className="model-highlight">{car.name}</span></h2>
              <p className="car-details-price price-animated">${car.price.toLocaleString()}</p>
            </div>
            
            <div className="tab-navigation slide-up">
              <button 
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                Specifications
              </button>
              <button 
                className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
            </div>
            
            <div className="tab-content slide-up">
              {activeTab === 'overview' && (
                <div className="overview-tab fade-in">
                  <p className="car-description">{car.description}</p>
                  <div className="highlight-features">
                    <div className="highlight-item">
                      <span className="highlight-icon">⚡</span>
                      <span className="highlight-text">{car.fuelType}</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">🔄</span>
                      <span className="highlight-text">{car.transmission}</span>
                    </div>
                    <div className="highlight-item">
                      <span className="highlight-icon">📅</span>
                      <span className="highlight-text">{car.year}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'specs' && (
                <div className="specs-tab fade-in">
                  <div className="car-details-specs">
                    <div className="spec-item">
                      <span className="spec-label">Fuel Type:</span>
                      <span className="spec-value">{car.fuelType}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Seating:</span>
                      <span className="spec-value">{car.seatingCapacity} Passengers</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Year:</span>
                      <span className="spec-value">{car.year}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Transmission:</span>
                      <span className="spec-value">{car.transmission}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Mileage:</span>
                      <span className="spec-value">{car.mileage} km/L</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Engine:</span>
                      <span className="spec-value">{car.engine || '2.0L 4-Cylinder'}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Horsepower:</span>
                      <span className="spec-value">{car.horsepower || '180 HP'}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Drive Type:</span>
                      <span className="spec-value">{car.driveType || 'FWD'}</span>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div className="features-tab fade-in">
                  <div className="features-grid">
                    <div className="feature-item">
                      <span className="feature-icon">🔊</span>
                      <span className="feature-text">Premium Audio System</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">❄️</span>
                      <span className="feature-text">Climate Control</span>
                    </div>
                   
                    <div className="feature-item">
                      <span className="feature-icon">🔌</span>
                      <span className="feature-text">USB Charging Ports</span>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🛰️</span>
                      <span className="feature-text">GPS Navigation</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="car-details-actions slide-up">
              <button
                className={`wishlist-btn next ${isWishlisted ? 'active' : ''}`}
                onClick={onToggleWishlist}
              >
                <span className="btn-icon">
                  {isWishlisted ? '❤️' : '🤍'}
                </span>
                <span className="btn-text">
                  {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </span>
              </button>
              <button className="contact-btn">
                <span className="btn-icon">📞</span>
                <span className="btn-text">Contact Dealer</span>
              </button>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  );
}

export default CarDetails;