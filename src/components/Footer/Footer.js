import React from 'react';

const footerStyle = {
  marginTop: '25px',
  padding: '2rem 1.5rem 2rem'
};

function Footer() {
  return (
    <footer class="footer has-background-dark" style={footerStyle}>
      <div class="content has-text-white has-text-centered">
        <p>
          Footer
        </p>
      </div>
    </footer>
  )
}

export default Footer;
