const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchFromTMDB = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data from TMDB');
  }

  const data = await response.json();
  return data.results;
};

export const fetchMovies = async (searchQuery) => {
  if (!searchQuery.trim()) {
    return fetchPopularMovies(); 
  }

  return fetchFromTMDB(`/search/movie?query=${searchQuery}`);
};

export const fetchPopularMovies = async () => {
  return fetchFromTMDB(`/movie/popular?`);
};