import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './Carousel.css';

const Carousel = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === movies.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="card-row">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            name={movie.name}
            rating={movie.rating}
            description={movie.description}
            image={movie.image}
            isActive={index === currentIndex}
          />
        ))}
      </div>
      <button className="next-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;