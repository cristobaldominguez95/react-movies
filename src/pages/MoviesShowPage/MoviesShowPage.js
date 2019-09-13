import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import MovieItem from '../../components/MovieItem/MovieItem';
import { getMovie } from '../../api/movies-api';
import { getTMDBImageUrl, chunkArray } from '../../utils';

class MoviesShowPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {},
      showSimilarMovies: 4
    };
    this.showMoreSimilarMovies = this.showMoreSimilarMovies.bind(this);
  }

  showMoreSimilarMovies() {
    this.setState((state) => ({
      showSimilarMovies: state.showSimilarMovies + 4
    }));
  }

  componentDidMount() {
    this.getMovie();
  }

  async getMovie() {
    let movie = await getMovie(this.props.match.params.movieId, 'similar');
    this.setState({
      loading: false,
      movie
    });
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
                <img src={getTMDBImageUrl(this.state.movie.data.poster_path)} alt={this.state.movie.data.original_title} />
              </div>
              <div className="column is-6">
                <p>{this.state.movie.data.overview}</p>
              </div>
            </div>
            <h1 className="title">Similar movies</h1>
            {chunkArray(this.state.movie.data.similar.results.slice(0, this.state.showSimilarMovies), 4).map((chunk, chunkIndex) =>
              <div className="columns" key={chunkIndex}>
                {chunk.map((movie) =>
                  <div className="column is-3" key={movie.id}>
                    <MovieItem movie={movie} />
                  </div>
                )}
              </div>
            )}
            {this.state.showSimilarMovies < this.state.movie.data.similar.results.length &&
              <button
                className="button is-link is-fullwidth"
                onClick={this.showMoreSimilarMovies}
              >
                Show more
              </button>
            }
          </>
        )}
      </>
    );
  }
}

export default MoviesShowPage;
