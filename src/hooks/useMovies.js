import { useState, useEffect } from 'react';
import { fetchMovies, fetchPopularMovies } from '../services/api.js';

export const useMovies = (searchQuery = '') => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      
      const getMovies = async () => {
        try {
          setLoading(true);
          setError(null);

          let data;

          if (!searchQuery.trim()) {
            data = await fetchPopularMovies(); 
          } else {
            data = await fetchMovies(searchQuery); 
          }

          setMovies(data || []);
        } catch (err) {
          setError(err.message || "Failed to fetch movies");
        } finally {
          setLoading(false);
        }
      };

      getMovies();

    }, 400);

    return () => clearTimeout(debounceTimer);

  }, [searchQuery]);

  return { movies, loading, error };
};