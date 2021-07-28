import { useState, useEffect } from 'react';
import { useParams,useRouteMatch } from 'react-router';
import { Link, Route, useHistory, useLocation } from 'react-router-dom';
import PageTitle from 'components/PageTitle/PageTitle';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
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
  ContainerInfo,
  ItemInfo,
  Btn
} from './MovieDetailsPage.styled';



export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
  fetchMovie(movieId).then(setMovie);
  }, [movieId])

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/')
  };

  const createYear = (movie) => {
  return movie.release_date ? movie.release_date.slice(0, 4) : '';
};

  return (
    <>
      {movie && <>
        <Btn type='button' onClick={handleGoBack}>Go back</Btn>
        <CardContainer>
      <ImgMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` } width='300px' height='200px'/>
        <DescContainer>
        <PageTitle text={`${movie.title} ${createYear(movie)}`} />
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
        </>
      }
      <ContainerInfo>
        <TextInfo>Additional Information</TextInfo>
        <ListInfo>
          <ItemInfo><Link to={{
            pathname: `${url}/cast`,
            state: {from: location?.state?.from}
          }}>Cast</Link></ItemInfo>
          <ItemInfo><Link to={{
            pathname: `${url}/reviews`,
            state: {from: location?.state?.from},
          }}>Reviews</Link></ItemInfo>
        </ListInfo>
        <Route path="/movies/:movieId/cast" >
          <Cast movieId={movieId}/>
          </Route>

          <Route path="/movies/:movieId/reviews" >
          <Reviews movieId={movieId}/>
          </Route>
      </ContainerInfo>


    </>
  )
}
