import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import MovieItem from '../../components/MovieItem/MovieItem';
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

  async componentDidMount() {
    let movie = await getMovie(this.props.match.params.movieId, 'similar');
    this.setState({
      loading: false,
      movie
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
      this.setState({
        loading: true
      });
      this.componentDidMount();
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
                <img src={getTMDBImageUrl(this.state.movie.data.poster_path)} alt={this.state.movie.data.original_title} />
              </div>
              <div className="column is-6">
                <p>{this.state.movie.data.overview}</p>
              </div>
            </div>
            <h1>Similar movies</h1>
            <div className="columns">
              {this.state.movie.data.similar.results.slice(0, 4).map((movie) =>
                <div className="column is-3" key={movie.id}>
                  <MovieItem movie={movie} />
                </div>
              )}
            </div>
          </>
        )}
      </>
    );
  }
}

export default MoviesShowPage;