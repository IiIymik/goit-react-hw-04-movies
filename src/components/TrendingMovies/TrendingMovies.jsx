import { useState, useEffect } from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import { ListMovies, ItemList } from './TrendingMovies.styled.js';

export default function TrendingMovies() {
  const {url} = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (movies) return;

    fetchTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, [movies]);


  return (
    <>
    {movies && <ListMovies>
        {movies.map(({id,title})=> (
          <ItemList key={id}>
            <Link to={`${url}movies/${id}`} >{title}</Link>
          </ItemList>
        ))}
    </ListMovies>}
    </>
  )
}
