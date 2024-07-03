import React from 'react';
// import './shimmer.css'; // Add appropriate CSS for shimmer effect
import '../app.css'
import { Link } from 'react-router-dom';

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <Link to={`#`} className="country">
      <img src='' alt="loading" />
      <div className="country-content">
        <h3 className="country-name">Loading...</h3>
        <h5>
          Population:<span>Loading...</span>
        </h5>
        <h5>
          Region:<span>Loading...</span>
        </h5>
        <h5>
          Capital:<span>Loading...</span>
        </h5>
      </div>
    </Link>
    </div>
  );
};

export default Shimmer;
