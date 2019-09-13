import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_TMDB_API_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY
  }
});
