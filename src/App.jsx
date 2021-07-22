import AppBar from 'components/Appbar/AppBar';
import Container from 'components/Container/Container';
import HomePage from 'pages/HomePage';
import NotFoundView from 'pages/NotFoundPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';



function App() {
    return (
      <Container>
        <AppBar />
        <Switch path="/" exact>
          <Route>
            <HomePage />
          </Route>


          <Route>
            <NotFoundView />
          </Route>
        </Switch>
        </Container>
    )
}

export default App
