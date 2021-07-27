import React from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { ListMovies, ItemList } from './MoviesList.styled.js';

export default function MoviesListTrend({ movies }) {
  const location = useLocation();
  const { url } = useRouteMatch();
  // console.log('url from MoviesListTrend', url);

  return (
  <ListMovies>
        {movies.map(({id,title})=> (
          <ItemList key={id}>
            <Link to={{
              pathname: `${url}movies/${id}`,
              state:{from: location},
            }} >{title}</Link>
          </ItemList>
        ))}
  </ListMovies>
  )
}
