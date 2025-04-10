function WishlistPanel({ wishlist, onClose, onRemove, onViewDetails }) {
    return (
      <div className="wishlist-panel">
        <div className="wishlist-header">
          <h2>Your Wishlist</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        {wishlist.length > 0 ? (
          <div className="wishlist-items">
            {wishlist.map(car => (
              <div key={car.id} className="wishlist-item">
                <div 
                  className="wishlist-item-content"
                  onClick={() => {
                    onViewDetails(car);
                    onClose();
                  }}
                >
                  <img 
                    src={car.image || `https://via.placeholder.com/80x60?text=${car.brand}`} 
                    alt={`${car.brand} ${car.name}`} 
                  />
                  <div className="wishlist-item-info">
                    <h3>{car.brand} {car.name}</h3>
                    <p>${car.price.toLocaleString()}</p>
                  </div>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => onRemove(car)}
                  aria-label="Remove from wishlist"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-wishlist">
            <p>Your wishlist is empty.</p>
            <p>Add cars you like to compare them later.</p>
          </div>
        )}
      </div>
    );
  }
  
  export default WishlistPanel;