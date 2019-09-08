import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';
import MoviesShowPage from '../pages/MoviesShowPage/MoviesShowPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MoviesShowPage} />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
