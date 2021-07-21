import React, {useState, } from 'react';
import { Title, ListTrending, ItemTrending } from './MoviesList.style.js';
import { fetchTrendingMovies } from 'utils/api.js';

function MoviesList() {
  return (
    <>
      <Title>Trending today</Title>
      <ListTrending>
      <ItemTrending></ItemTrending>
      </ListTrending>

    </>
  )
}

export default MoviesList
