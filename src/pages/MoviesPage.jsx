import React, { useEffect, useState } from 'react';
import { Link, useLocation, useRouteMatch, useHistory} from 'react-router-dom';
import { Form, Button, Title, Input, Container,ListMovies, ItemList} from './MoviesPage.styled';
import { fetchSearchMovie } from 'services/api';


export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const [movies, setMovie] = useState(null);
  const [searched, setSearched] = useState(null)



    const handleSearch = e => {
      e.preventDefault();
      setSearched(e.target.elements.searchMovie.value);
      history.push({
        ...location,
        search:`query=${e.target.elements.searchMovie.value}`,
      })
    };
  const query = new URLSearchParams(location.search).get('query') ?? '';

  useEffect(() => {
    if (!searched) return;

    fetchSearchMovie(searched).then(({ results }) => setMovie(results));
  }, [searched])

  useEffect(() => {
      if (location.search || !'') {
        setSearched(query)
      }
  },[location,query])





  return (
    <Container>
    <Form onSubmit={handleSearch}>
    <Button type="submit">
      <Title>Search</Title>
    </Button>

      <Input
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movie"
        name="searchMovie"
    />
      </Form>
      {movies && <ListMovies>
        {movies.map(({id,title})=> (
          <ItemList key={id}>
            <Link to={{
              pathname: `${url}/${id}`,
              state:{from: {...location, search:`query=${searched}`},}
            }} >{title}</Link>
          </ItemList>
        ))}
        </ListMovies>
      }
    </Container>
  )
}
