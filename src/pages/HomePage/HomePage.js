import React from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import Spinner from '../../components/Spinner/Spinner';
import { getMoviesNowPlaying } from '../../api/movies-api';
import { chunkArray } from '../../utils';

class HomePage extends React.Component {
  state = {
    loading: true,
    movies: []
  };

  async componentDidMount() {
    let movies = await getMoviesNowPlaying();
    this.setState({
      loading: false,
      movies
    });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <h1 className="title">Now in the theaters</h1>
            {chunkArray(this.state.movies.data.results, 4).map((chunk, chunkIndex) =>
              <div className="columns" key={chunkIndex}>
                {chunk.map((movie) =>
                  <div className="column is-3" key={movie.id}>
                    <MovieItem movie={movie} />
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </>
    );
  }
}

export default HomePage;
