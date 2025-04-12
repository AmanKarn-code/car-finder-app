# Car Finder App

A modern React application for browsing and searching cars, with filtering, sorting, and wishlist functionality.
## Live Link
https://perfect-car-finder-app.vercel.app/

## Features

- **Search and Filter**: Find cars by brand, model, price range, fuel type, and seating capacity
- **Sorting Options**: Sort by price (low to high, high to low) or year
- **Wishlist**: Save your favorite cars to view later
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Pagination**: Browse through multiple pages of car listings

## 🛠️ Tech Stack

- **React** - Frontend library for building user interfaces
- **React Router** - Navigation and routing between pages
- **Context API** - State management for theme and other app-wide states
- **React Icons** - Icon library for a consistent look and feel
- **Vite** - Next-generation frontend tooling for fast development
- **Local Storage API** - For persisting wishlist and theme preferences

## 📋 Prerequisites

Before running this project, you should have the following installed:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone: https://github.com/AmanKarn-code/car-finder-app.git
   cd car-finder-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if you use yarn:
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or if you use yarn:
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
car-finder-app/
├── public/              # Static assets
├── src/                 # Source files
│   ├── api/             # API service modules
│   ├── components/      # Reusable UI components
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## 📱 Key Components

- **Header**: Main navigation bar with theme toggle and wishlist count
- **SearchBar**: Search functionality for finding cars by brand or model
- **FilterSection**: Advanced filtering options with collapsible UI
- **CarCard**: Display card for individual car listings
- **CarDetails**: Modal for displaying detailed car information
- **Pagination**: Component for navigating between pages of results
- **WishlistButton**: Toggle button for adding/removing cars from wishlist
- **Loader**: Loading indicator for asynchronous operations

## 🔄 API Integration

The app uses a simulated API service (`src/api/carsApi.js`) that provides mock data for cars and filtering options. In a production environment, this would be replaced with real API endpoints.

Available API functions:
- `getCars(params)` - Get filtered and paginated car listings
- `getBrands()` - Get all available car brands
- `getFuelTypes()` - Get all available fuel types
- `getSeatingCapacities()` - Get all available seating capacities
- `getPriceRange()` - Get minimum and maximum price ranges
- `getCarById(id)` - Get detailed information for a specific car

## 🌙 Theme Support

The application supports both light and dark themes:
- Theme preference is stored in local storage
- Toggle between themes using the button in the header
- Tailwind's dark mode classes are used for styling

## 📦 Local Storage Usage

The app uses browser local storage for:
- Persisting theme preference
- Saving the wishlist items


## 🚀 Deployment

To build the application for production:

```bash
npm run build
# or if you use yarn:
yarn build
```

This will create a `dist` directory with optimized production-ready files that can be deployed to any static hosting service like Netlify, Vercel, GitHub Pages, etc.

## 🔍 Future Enhancements

- User authentication and personalized recommendations
- Advanced filtering options (transmission type, mileage, etc.)
- Car comparison feature
- Integration with real car listing APIs
- User reviews and ratings
- Location-based search to find nearby dealerships

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Router](https://reactrouter.com/docs/en/v6)
- [Vite](https://vitejs.dev/guide/)