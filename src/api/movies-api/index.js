import httpClient from './http-client';

export const getMoviesNowPlaying = () => {
  return httpClient.get('/movie/now_playing');
};

export const getMovie = (movieId, ...append) => {
  return httpClient.get(`/movie/${movieId}`, {
    params: {
      append_to_response: append.join()
    }
  });
};
