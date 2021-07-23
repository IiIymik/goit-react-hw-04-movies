import React from 'react'
import {CardContainer,ImgMovie,NameMovie,ScoreMovie,Overview,TextOverview,Genres,ListGenres,Item} from './MovieCard.styled.js';

export default function MovieCard(props) {
  const {
    overview,
    title,
    genres,
    poster_path,
    vote_average
  } = props;
  return (
    <CardContainer>
      <ImgMovie src={`${poster_path}`}/>
      <NameMovie>{title}</NameMovie>
      <ScoreMovie>{vote_average}</ScoreMovie>
      <Overview>Overview</Overview>
      <TextOverview>{overview}</TextOverview>
      <Genres>Genres</Genres>
      <ListGenres>
        {genres && genres.map(({id,name}) => (
          <Item key={id}>{name}</Item>
        ))}
      </ListGenres>
  </CardContainer>
  )
}
