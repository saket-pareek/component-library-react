import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../UsePopcorn/const';

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setError('');
        setIsLoading(true);
        const res = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}`, {
          signal: controller.signal,
        });
        if (!res.ok)
          throw new Error('Something went wrong with fetching movies');
        const data = await res.json();
        if (data.Response === 'False') throw new Error('Movie not found');
        setMovies(data.Search);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    // handleCloseMovie();
    fetchMovies();

    return () => controller.abort();
  }, [query]);

  return { movies, isLoading, error };
}
