# Movie Explorer

Movie Explorer is a responsive single-page web application built using React and Tailwind CSS. It allows users to browse popular movies and search for specific titles using data fetched from The Movie Database (TMDB) API.

---

## Live Demo

Add your deployed link here

---

## Repository

Add your GitHub repository link here

---

## Features

* Search movies dynamically using a responsive search bar
* Display popular movies by default when no search query is provided
* Debounced API calls to optimize network requests
* Skeleton loading for improved user experience during data fetching
* Error handling with a retry option
* Fully responsive layout for mobile, tablet, and desktop
* Clean component-based architecture for scalability and maintainability

---

## Tech Stack

* Frontend: React (Vite)
* Styling: Tailwind CSS
* API: The Movie Database (TMDB)
* State Management: React Hooks (useState, useEffect)
* Deployment: Vercel or Netlify

---

## Architecture and Design Decisions

* A custom hook (`useMovies`) is used to manage data fetching, loading state, error handling, and debouncing logic.
* API-related logic is separated into a dedicated services layer for better maintainability.
* The UI is divided into reusable components such as Navbar, SearchBar, MovieCard, Skeleton loaders, and Error component.
* Debouncing is implemented to prevent excessive API calls during user input.
* Skeleton loading is used instead of a traditional spinner to improve perceived performance.
* When the search input is empty, popular movies are displayed to maintain a consistent user experience.

---

## Folder Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── SkeletonCard.jsx
│   ├── SkeletonGrid.jsx
│   ├── Error.jsx
│
├── hooks/
│   ├── useMovies.js
│
├── services/
│   ├── api.js
│
├── App.jsx
├── main.jsx
```

---

## Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file in the root directory and add your TMDB API key

```env
VITE_TMDB_API_KEY=your_api_key_here
```

4. Run the development server

```bash
npm run dev
```

---

## Demo Video

Add your video link here

---

## Future Improvements

* Pagination or infinite scrolling for movie results
* Dedicated movie details page
* Filtering options such as genre and rating
* Theme toggle (dark/light mode)

---

## Author

Navneet Mishra
