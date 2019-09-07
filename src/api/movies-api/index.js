import httpClient from './http-client';

export const getMoviesNowPlaying = () => {
  return httpClient.get('/movie/now_playing');
};
