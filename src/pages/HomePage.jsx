import PageTitle from "components/PageTitle/PageTitle";
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

export default function HomePage() {
return (
    <>
      <PageTitle text="Trending today" />
      <TrendingMovies/>
    </>
  )
}

