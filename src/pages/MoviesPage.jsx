import React, { useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { Form, Button, Title, Input, Container,ListMovies, ItemList} from './MoviesPage.styled';
import { fetchSearchMovie } from 'services/api';


export default function MoviesPage() {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [movies, setMovie] = useState(null);
    const handleSearch = e => {
      e.preventDefault();
      console.log(e.target.elements.searchMovie.value);
    fetchSearchMovie(e.target.elements.searchMovie.value).then(({results})=> setMovie(results))
    };

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
              state:{from: location},
            }} >{title}</Link>
          </ItemList>
        ))}
        </ListMovies>
      }
    </Container>
  )
}
