import PageTitle from "components/PageTitle/PageTitle";
import { useState } from "react";
import {fetchTrendingMovies} from 'utils/api';
export default function HomePage() {
  const [movies, setMovies] = useState(null);

  fetchTrendingMovies().then(setMovies)
  // console.log(movies);
  return (
    <>
      <PageTitle text="Trending today" />
    </>
  )
}

