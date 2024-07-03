import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './shimmer'; // Import the shimmer component
export default function CountryCard(props) {
  // console.log(props.data);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum delay of 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <Link to={`${props.name}`}  className="country" state={props.data}>
      <img src={props.flag} alt="" />
      <div className="country-content">
        <h3 className="country-name">{props.name}</h3>
        <h5>
          Population:<span>{props.population}</span>
        </h5>
        <h5>
          Region:<span>{props.region}</span>
        </h5>
        <h5>
          Capital:<span>{props.capital}</span>
        </h5>
      </div>
    </Link>
  );
}

