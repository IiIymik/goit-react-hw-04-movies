import { useState, useEffect } from "react";
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import { ListMovies, ItemList } from './TrendingMovies.styled.js';

export default function TrendingMovies() {
  const location = useLocation();
  const {url} = useRouteMatch();
  const [movies, setMovies] = useState(null);
console.log(location);
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
            <Link to={{
              pathname: `${url}movies/${id}`,
              state:{from: location},
            }} >{title}</Link>
          </ItemList>
        ))}
    </ListMovies>}
    </>
  )
}
