import React from 'react';
import SearchForm from './SearchForm';
import Spinner from '../../components/Spinner/Spinner';
import MoviesList from '../../components/MoviesList/MoviesList';
import { searchMovies } from '../../api/movies-api';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSearched: false,
      loading: false,
      movies: []
    };
  }

  async search(query) {
    this.setState({
      loading: true
    });
    let movies = await searchMovies(query);
    this.setState({
      hasSearched: true,
      loading: false,
      movies: movies.data.results
    });
  }

  render() {
    return (
      <>
        <SearchForm
          onSearch={(query) => this.search(query)}
          loading={this.state.loading}
        />
        {this.state.loading ? (
          <Spinner />
        ) : this.state.hasSearched && (
          this.state.movies.length === 0 ? (
            <p>No movies found</p>
          ): (
            <MoviesList movies={this.state.movies} />         
          )
        )}
      </>
    );
  }
}

export default SearchPage;
