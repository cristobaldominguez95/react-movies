import React from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import Spinner from '../../components/Spinner/Spinner';
import { getMoviesNowPlaying } from '../../api/movies-api';

class HomePage extends React.Component {
  state = {
    loading: true,
    movies: []
  };

  async componentDidMount() {
    let movies = await getMoviesNowPlaying();
    this.setState({
      loading: false,
      movies: movies.data.results
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
            <MoviesList movies={this.state.movies} />
          </>
        )}
      </>
    );
  }
}

export default HomePage;
