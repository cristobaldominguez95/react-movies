import React from 'react';
import { Link } from 'react-router-dom';
import { getTMDBImageUrl } from '../../utils';

function MovieItem(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <Link to={`/movies/${props.movie.id}`}>
            <img src={getTMDBImageUrl(props.movie.poster_path)} alt={props.movie.original_title} />
          </Link>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <Link to={`/movies/${props.movie.id}`}>
              <p className="title is-4">{props.movie.original_title}</p>
            </Link>
          </div>
        </div>
        <div className="content">
          {props.movie.overview}
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
