import { useState, useEffect } from 'react';
import { useParams,useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import PageTitle from 'components/PageTitle/PageTitle';
import { fetchMovie } from 'services/api';
import {
  CardContainer,
  ImgMovie,
  ScoreMovie,
  Overview,
  TextOverview,
  Genres,
  ListGenres,
  Item,
  DescContainer,
  TextInfo,
  ListInfo,
  ContainerInfo
} from './MovieDetailsPage.styled';



export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  console.log(url);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  fetchMovie(movieId).then(setMovie);
  },[movieId])

  return (
    <>

      {movie &&
        <CardContainer>

      <ImgMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` } width='300px' height='200px'/>
        <DescContainer>
        <PageTitle text={`${movie.title}`} />
      <ScoreMovie>User score: {movie.vote_average}</ScoreMovie>
      <Overview>Overview</Overview>
      <TextOverview>{movie.overview}</TextOverview>
      <Genres>Genres</Genres>
      <ListGenres>
        {movie.genres && movie.genres.map(({id,name}) => (
          <Item key={id}>{name}</Item>
        ))}
      </ListGenres>
      </DescContainer>
      </CardContainer>
      }
      <ContainerInfo>
        <TextInfo>Additional Information</TextInfo>
        <ListInfo>
          <Link to={`${url}/cast`}>Cast</Link>
          <br/>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </ListInfo>
      </ContainerInfo>
    </>
  )
}
