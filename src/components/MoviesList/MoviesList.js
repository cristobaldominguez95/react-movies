import React from 'react';
import MovieItem from '../../components/MovieItem/MovieItem';
import { chunkArray } from '../../utils';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesToShow: 4
    };
    this.showMoreMovies = this.showMoreMovies.bind(this);
  }

  showMoreMovies() {
    this.setState((state) => ({
      moviesToShow: state.moviesToShow + 4
    }));
  }

  render() {
    const movies = this.props.showAll ? this.props.movies : this.props.movies.slice(0, this.state.moviesToShow);
    return (
      <>
        {chunkArray(movies, 4).map((chunk, chunkIndex) =>
          <div className="columns" key={chunkIndex}>
            {chunk.map((movie) =>
              <div className="column is-3" key={movie.id}>
                <MovieItem movie={movie} />
              </div>
            )}
          </div>
        )}
        {(!this.props.showAll && this.state.moviesToShow < this.props.movies.length) &&
          <button
            className="button is-link is-fullwidth"
            onClick={this.showMoreMovies}
          >
            Show more
          </button>
        }
      </>
    );
  }
}

MoviesList.defaultProps = {
  showAll: true
};

export default MoviesList;
