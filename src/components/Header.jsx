// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { IoSearchOutline } from "react-icons/io5";

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
          <span className="logo-icon">🚗</span>
          <span className="logo-text">Car Finder</span>
        </h1>
      </div>
      
      <div className={`search-bar ${isSearchFocused ? 'focused' : ''}`}>
        <span className="search-icon"><IoSearchOutline /></span>
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
            ×
          </button>
        )}
      </div>
      
      <div className="header-actions">
        <button 
          className={`wishlist-btn ${wishlistCount > 0 ? 'has-items' : ''}`}
          onClick={toggleWishlistPanel}
          aria-label="View wishlist"
        >
          <span className="wishlist-icon">❤️</span>
          <span className="wishlist-count">{wishlistCount}</span>
        </button>
        
        <button 
          className="theme-toggle"
          onClick={toggleDarkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;