import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import MoviesList from '../../components/MoviesList/MoviesList';
import { getMovie } from '../../api/movies-api';
import { getTMDBImageUrl } from '../../utils';

class MoviesShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {}
    };
  }
  
  async getMovie() {
    let movie = await getMovie(this.props.match.params.movieId, 'similar');
    this.setState({
      loading: false,
      movie: movie.data
    });
  }

  componentDidMount() {
    this.getMovie();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
      this.setState({
        loading: true,
        showSimilarMovies: 4
      });
      this.getMovie();
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <>
            <div className="columns">
              <div className="column is-6">
                <img src={getTMDBImageUrl(this.state.movie.poster_path)} alt={this.state.movie.original_title} />
              </div>
              <div className="column is-6">
                <p>{this.state.movie.overview}</p>
              </div>
            </div>
            <h1 className="title">Similar movies</h1>
            <MoviesList movies={this.state.movie.similar.results} showAll={false} />
          </>
        )}
      </>
    );
  }
}

export default MoviesShowPage;
