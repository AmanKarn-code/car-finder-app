import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Search, 
  X, 
  Heart, 
  Sun, 
  Moon,
  Car
} from 'lucide-react';

function Header({ searchQuery, setSearchQuery, wishlistCount, toggleWishlistPanel }) {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`app-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h1>
          <Car className="logo-icon" size={24} strokeWidth={2} />
          <span className="logo-text">Car Finder</span>
        </h1>
      </div>
      
      <div className={`search-bar ${isSearchFocused ? 'focused' : ''}`}>
        <span className="search-icon">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Search brands, models..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
        {searchQuery && (
          <button
            className="clear-search"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
      
      <div className="header-actions">
        <button
          className={`wishlist-btn ${wishlistCount > 0 ? 'has-items' : ''}`}
          onClick={toggleWishlistPanel}
          aria-label="View wishlist"
        >
          <Heart 
            className="wishlist-icon" 
            size={22} 
            fill={wishlistCount > 0 ? "currentColor" : "none"} 
          />
          {wishlistCount > 0 && (
            <span className="wishlist-count">{wishlistCount}</span>
          )}
        </button>
        
        <button
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Sun size={22} />
          ) : (
            <Moon size={22} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;