import axios from 'axios';
import { API_KEY } from 'constants/index';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const params = `trending/movie/week`;
  const response = await axios.get(`${params}?api_key=${API_KEY}`);
  return response.data;
};
