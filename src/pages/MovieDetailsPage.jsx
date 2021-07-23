import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PageTitle from 'components/PageTitle/PageTitle';
import { fetchMovie } from 'services/api';
import MovieCard from 'components/MovieCard/MovieCard';


export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie(movieId).then(setMovie);
  },[movie,movieId])

  return (
    <>
      <PageTitle text={`Movie ${movieId}`} />
      <MovieCard props={movie}/>
    </>
  )
}
