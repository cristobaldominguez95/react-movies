import React from 'react';

const footerStyle = {
  marginTop: '25px',
  padding: '2rem 1.5rem 2rem'
};

function Footer() {
  return (
    <footer className="footer has-background-dark" style={footerStyle}>
      <div className="content has-text-white has-text-centered">
        <p>
          Footer
        </p>
      </div>
    </footer>
  )
}

export default Footer;
