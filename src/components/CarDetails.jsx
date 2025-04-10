function CarDetails({ car, onClose, isWishlisted, onToggleWishlist }) {
    return (
      <div className="car-details-overlay">
        <div className="car-details-modal">
          <button className="close-btn" onClick={onClose}>×</button>
          
          <div className="car-details-content">
            <div className="car-details-image">
              <img 
                src={car.image || `https://via.placeholder.com/600x400?text=${car.brand}+${car.name}`} 
                alt={`${car.brand} ${car.name}`} 
              />
            </div>
            
            <div className="car-details-info">
              <h2>{car.brand} {car.name}</h2>
              <p className="car-details-price">${car.price.toLocaleString()}</p>
              
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
              </div>
              
              <p className="car-description">{car.description}</p>
              
              <div className="car-details-actions">
                <button 
                  className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                  onClick={onToggleWishlist}
                >
                  {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
                <button className="contact-btn">Contact Dealer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CarDetails;