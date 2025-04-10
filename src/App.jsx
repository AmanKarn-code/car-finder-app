import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import CarCard from "./components/CarCard";
import Pagination from "./components/Pagination";
import CarDetails from "./components/CarDetails";
import WishlistPanel from "./components/WishlistPanel";
import Loading from "./components/Loading";
import { fetchCars } from "./services/api";
import useLocalStorage from "./hooks/useLocalStorage";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [showWishlist, setShowWishlist] = useState(false);
  const [filters, setFilters] = useState({
    brand: "",
    minPrice: "",
    maxPrice: "",
    fuelType: "",
    seatingCapacity: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const { darkMode } = useTheme();

  const carsPerPage = 10;

  // Fetch cars data
  useEffect(() => {
    const getCars = async () => {
      try {
        setLoading(true);
        const data = await fetchCars();
        setCars(data);
        setFilteredCars(data);
      } catch (err) {
        setError("Failed to fetch cars. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getCars();
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...cars];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (car) =>
          car.name.toLowerCase().includes(query) ||
          car.brand.toLowerCase().includes(query)
      );
    }

    // Apply filters
    if (filters.brand) {
      result = result.filter((car) => car.brand === filters.brand);
    }

    if (filters.minPrice) {
      result = result.filter((car) => car.price >= parseInt(filters.minPrice));
    }

    if (filters.maxPrice) {
      result = result.filter((car) => car.price <= parseInt(filters.maxPrice));
    }

    if (filters.fuelType) {
      result = result.filter((car) => car.fuelType === filters.fuelType);
    }

    if (filters.seatingCapacity) {
      result = result.filter(
        (car) => car.seatingCapacity === parseInt(filters.seatingCapacity)
      );
    }

    // Apply sorting
    if (sortOrder === "low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredCars(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [cars, filters, searchQuery, sortOrder]);

  // Get current cars for pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle car in wishlist
  const toggleWishlist = (car) => {
    const isInWishlist = wishlist.some((item) => item.id === car.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== car.id));
    } else {
      setWishlist([...wishlist, car]);
    }
  };
  const handleScroll = () => {
    const btt = document.getElementById("btt");
    if (window.scrollY >= 300) {
      btt.classList.remove("none");
      btt.classList.add("block");
    } else {
      btt.classList.add("none");
      btt.classList.remove("block");
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    
  // View car details
  const viewCarDetails = (car) => {
    setSelectedCar(car);
  };

  // Close car details
  const closeCarDetails = () => {
    setSelectedCar(null);
  };

  // Toggle wishlist panel
  const toggleWishlistPanel = () => {
    setShowWishlist(!showWishlist);
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        wishlistCount={wishlist.length}
        toggleWishlistPanel={toggleWishlistPanel}
      />

      <main className="main-content">
        <button id="btt" className="backToTop none button" onClick={scrollToTop}>
          <IoIosArrowUp />
        </button>
        <FilterSection
          filters={filters}
          setFilters={setFilters}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        {loading ? (
          <Loading />
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <div className="cars-grid">
              {currentCars.length > 0 ? (
                currentCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    isWishlisted={wishlist.some((item) => item.id === car.id)}
                    onToggleWishlist={() => toggleWishlist(car)}
                    onViewDetails={() => viewCarDetails(car)}
                  />
                ))
              ) : (
                <div className="no-results">
                  No cars found matching your criteria.
                </div>
              )}
            </div>

            <Pagination
              carsPerPage={carsPerPage}
              totalCars={filteredCars.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </>
        )}
      </main>

      {selectedCar && (
        <CarDetails
          car={selectedCar}
          onClose={closeCarDetails}
          isWishlisted={wishlist.some((item) => item.id === selectedCar.id)}
          onToggleWishlist={() => toggleWishlist(selectedCar)}
        />
      )}

      {showWishlist && (
        <WishlistPanel
          wishlist={wishlist}
          onClose={toggleWishlistPanel}
          onRemove={toggleWishlist}
          onViewDetails={viewCarDetails}
        />
      )}
    </div>
  );
}

export default App;
