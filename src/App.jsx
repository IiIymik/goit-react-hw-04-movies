import {lazy, Suspense} from 'react'
import { Route, Switch } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Container from 'components/Container/Container';
// import HomePage from 'pages/HomePage';
// import NotFoundPage from 'pages/NotFoundPage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

const HomePage = lazy(() => import('pages/HomePage' /* webpackChunkName: 'HomePage' */));
const NotFoundPage = lazy(() => import('pages/NotFoundPage' /* webpackChunkName: 'NotFoundPage' */));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage' /* webpackChunkName: 'MoviesPage' */));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: 'MovieDetailsPage' */));

function App() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<h1>Load...</h1>}>
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
            <NotFoundPage />
          </Route>
          </Switch>
          </Suspense>
        </Container>
    )
}

export default App
