# Google Flights Clone

A minimal React/TypeScript application emulating flight search functionality. Uses **MUI**, **React Context** for global state, and **Axios** for data fetching.

## Features

1. **Search Flights** – Enter origin, destination, date(s), and cabin class.  
2. **Filter Options** – Round trip or one-way, passenger count, and cabin class.  
3. **Flight Results** – Displays pricing, duration, stops, and carrier details.  
4. **Airport Autocomplete** – Type-ahead suggestions for cities or airports.  
5. **State Management** – Centralized flight data in a custom `FlightContext`.  

## Project Structure

- **src/**  
  - **components/**  
    - Components organized by domain
  - **context/**  
    - `FlightContext.tsx` for global flight-related state  
  - **hooks/**  
    - Custom hooks (`useFetch`, `useSearchFlights`, `useSearchAirports`, `useDebounce`)  
  - **types/**  
    - Type definitions for flights, locations, and related data models  
  - **utils/**  
    - Helper functions (`formatTime`, `formatDuration`)  
  - **App.tsx**  
    - Main container rendering the UI layout and search components  
  - **main.tsx**  
    - Entry point, wraps `App` with providers and renders to the DOM  

## Getting Started

1. **Install Dependencies**  
   ```bash
   npm install
   ```

2. **Install Dependencies**  
- Create a .env file or use your preferred method for Vite environment variables.
- Provide your RapidAPI key as VITE_RAPIDAPI_KEY.

2. **Run the App**
  ```bash
   npm run dev
   ```
Opens the development server at http://localhost:5173 by default.

## Notes
- The API calls use sky-scrapper via RapidAPI -> https://rapidapi.com/apiheya/api/sky-scrapper
- Caching is done in useFetch with a simple in-memory cache.
- MUI’s date and icon libraries are used to handle pickers and UI icons.
