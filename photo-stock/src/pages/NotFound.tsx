import React from 'react';

function NotFound() {
  return (
    <>
      <div className="not-found">
        <div className="container">
          <div className="notfound-container">
            <span className="notfound-image">&#9785;</span>
            <h2 className="notfound-title">404</h2>
            <p className="notfound-subtitle">
              We couldn't find a photo for your search. Go to main page
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
