import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomePage from '../pages/HomePage/HomePage';
import MoviesShowPage from '../pages/MoviesShowPage/MoviesShowPage';
import SearchPage from '../pages/SearchPage/SearchPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:movieId" component={MoviesShowPage} />
        <Route path="/search" component={SearchPage} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
