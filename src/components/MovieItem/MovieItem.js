import React from 'react';

function MovieItem(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={`https://image.tmdb.org/t/p/w780/${props.movie.poster_path}`} alt={props.movie.original_title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.movie.original_title}</p>
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
