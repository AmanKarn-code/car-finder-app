function FilterSection({ filters, setFilters, sortOrder, setSortOrder }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      brand: "",
      minPrice: "",
      maxPrice: "",
      fuelType: "",
      seatingCapacity: "",
    });
    setSortOrder("");
  };

  return (
    <div className="filter-section">
      <h2>Filter Cars</h2>

      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="brand">Brand</label>
          <select
            id="brand"
            name="brand"
            value={filters.brand}
            onChange={handleFilterChange}
          >
            <option value="">All Brands</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
            <option value="Ford">Ford</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Nissan">Nissan</option>
            <option value="Kia">Kia</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
          />
        </div>

        <div className="filter-group">
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            id="fuelType"
            name="fuelType"
            value={filters.fuelType}
            onChange={handleFilterChange}
          >
            <option value="">All Types</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="seatingCapacity">Seating</label>
          <select
            id="seatingCapacity"
            name="seatingCapacity"
            value={filters.seatingCapacity}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="2">2 Seats</option>
            <option value="4">4 Seats</option>
            <option value="5">5 Seats</option>
            <option value="7">7 Seats</option>
            <option value="8">8+ Seats</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sortOrder">Sort by Price</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Default</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
      </div>

      <button className="clear-filters-btn" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default FilterSection;
