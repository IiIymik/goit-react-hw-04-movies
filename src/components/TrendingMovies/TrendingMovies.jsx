import { useState, useEffect } from "react";
import { fetchTrendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';

export default function TrendingMovies() {
const [movies, setMovies] = useState(null);
  useEffect(() => {
    if (movies) return;
    fetchTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, [movies]);

  return (
    <>
      {movies && <MoviesList movies={movies}/>}
    </>
  )
}


