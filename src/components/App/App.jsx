import React from 'react';
import { NavLink, Route} from 'react-router-dom';
import { Container, Header, LinkList } from './App.styled.js';
import MoviesList from 'components/MoviesList/MoviesList';

function App() {
    return (
      <Container>
        <Header>
          <Route>
          <LinkList>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/movies'>Movies</NavLink>
            </LinkList>
           </Route>
        </Header>
            <MoviesList/>
      </Container>
    )
}

export default App
