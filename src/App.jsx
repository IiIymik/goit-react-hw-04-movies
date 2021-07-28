import { Route, Switch } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';
import HomePage from 'pages/HomePage';
import NotFoundView from 'pages/NotFoundPage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';



function App() {
    return (
      <Container>
        <AppBar />
        <Switch >
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage/>
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage/>
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
        </Container>
    )
}

export default App
