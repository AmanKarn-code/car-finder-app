import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function FilterSection({ filters, setFilters, sortOrder, setSortOrder }) {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const clearFilters = () => {
    // Add a subtle shake animation to inputs when clearing
    const inputs = document.querySelectorAll('.filter-group input, .filter-group select');
    inputs.forEach(input => {
      input.classList.add('shake-effect');
      setTimeout(() => input.classList.remove('shake-effect'), 500);
    });
    
    setFilters({
      brand: "",
      minPrice: "",
      maxPrice: "",
      fuelType: "",
      seatingCapacity: "",
    });
    setSortOrder("");
  };
  
  const filterOptions = {
    brands: ["Toyota", "Honda", "BMW", "Mercedes", "Audi", "Ford", "Chevrolet", "Nissan", "Kia"],
    fuelTypes: ["Petrol", "Diesel", "Electric", "Hybrid"],
    seatingCapacities: ["2", "4", "5", "7", "8+"],
    sortOptions: ["low-to-high", "high-to-low"]
  };
  
  return (
    <motion.div 
      className="filter-section"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="filter-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h2>Filter Cars</h2>
        <span className={`expand-icon ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? '−' : '+'}
        </span>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="filter-content"
          >
            <div className="filters-container">
              <motion.div 
                className="filter-group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <label htmlFor="brand">Brand</label>
                <select
                  id="brand"
                  name="brand"
                  value={filters.brand}
                  onChange={handleFilterChange}
                  className="filter-input pulse-focus"
                >
                  <option value="">All Brands</option>
                  {filterOptions.brands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </motion.div>
              
              <motion.div 
                className="filter-group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <label htmlFor="minPrice">Min Price</label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  placeholder="Min Price"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  className="filter-input pulse-focus"
                />
              </motion.div>
              
              <motion.div 
                className="filter-group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <label htmlFor="maxPrice">Max Price</label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="Max Price"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  className="filter-input pulse-focus"
                />
              </motion.div>
              
              <motion.div 
                className="filter-group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <label htmlFor="fuelType">Fuel Type</label>
                <select
                  id="fuelType"
                  name="fuelType"
                  value={filters.fuelType}
                  onChange={handleFilterChange}
                  className="filter-input pulse-focus"
                >
                  <option value="">All Types</option>
                  {filterOptions.fuelTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </motion.div>
              
              <motion.div 
                className="filter-group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <label htmlFor="seatingCapacity">Seating</label>
                <select
                  id="seatingCapacity"
                  name="seatingCapacity"
                  value={filters.seatingCapacity}
                  onChange={handleFilterChange}
                  className="filter-input pulse-focus"
                >
                  <option value="">All</option>
                  {filterOptions.seatingCapacities.map((capacity) => (
                    <option key={capacity} value={capacity.replace('+', '')}>
                      {capacity} {capacity === "1" ? "Seat" : "Seats"}
                    </option>
                  ))}
                </select>
              </motion.div>
              
              <motion.div 
                className="filter-group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <label htmlFor="sortOrder">Sort by Price</label>
                <select
                  id="sortOrder"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="filter-input pulse-focus"
                >
                  <option value="">Default</option>
                  <option value="low-to-high">Low to High</option>
                  <option value="high-to-low">High to Low</option>
                </select>
              </motion.div>
            </div>
            
            <motion.button 
              className="clear-filters-btn"
              onClick={clearFilters}
              whileHover={{ scale: 1.05, backgroundColor: "#01102e", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default FilterSection;