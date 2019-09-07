import React from 'react';
import Router from './routes';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Router />
      </div>
    </>
  );
}

export default App;
