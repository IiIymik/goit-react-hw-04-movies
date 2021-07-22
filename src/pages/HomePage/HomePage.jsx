import { useState, useEffect } from "react";
import { Link,  } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import PageTitle from "components/PageTitle/PageTitle";
import { ListMovies, ItemList } from './HomePage.styled.js';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (movies) return;

    fetchTrendingMovies().then(({ results }) => {
      setMovies(results);
    });
  }, [movies]);

  return (
    <>
      <PageTitle text="Trending today" />
      {movies && <ListMovies>
        {movies.map(({id,original_title})=> (
          <ItemList key={id}>
            <Link to={`/${id}`} >{original_title}</Link>
          </ItemList>
        ))}
      </ListMovies>}
    </>
  )
}

